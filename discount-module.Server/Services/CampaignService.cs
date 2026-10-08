using discount_module.Server.Enums;
using discount_module.Server.Exceptions;
using discount_module.Server.Models;
using FluentValidation;

namespace discount_module.Server.Services
{
    public class CampaignService : ICampaignService
    {
        private readonly IValidator<ApplyRequest> _validator;

        public CampaignService(IValidator<ApplyRequest> validator)
        {
            _validator = validator;
        }

        private readonly List<Campaign> Data = new List<Campaign>
        {
            new Campaign { Type = CampaignType.FIXED_AMOUNT, Category = CampaignCategory.COUPON},
            new Campaign { Type = CampaignType.PERCENTAGE, Category = CampaignCategory.COUPON},
            new Campaign { Type = CampaignType.PERCENTAGE_CATEGORY, Category = CampaignCategory.ON_TOP},
            new Campaign { Type = CampaignType.POINTS, Category = CampaignCategory.ON_TOP},
            new Campaign { Type = CampaignType.SPECIAL, Category = CampaignCategory.SEASONAL},
        };

        public ApplyResult CampaignCalculator(ApplyRequest request)
        {
            var items = request.Items ?? new List<ItemRequest>();
            var campaigns = request.Campaigns ?? new List<CampaignRequest>();

            var validationResult = _validator.Validate(request);
            if (!validationResult.IsValid)
            {
                throw new AppValidationException(validationResult.Errors, null);
            }

            // check type and category
            foreach (var c in campaigns)
            {
                if(!Data.Any(d => d.Type == c.CampaignType && d.Category == c.CampaignCategory))
                {
                    throw new BadRequestException($"Campaign type {c.CampaignType} and category {c.CampaignCategory} do not match.");
                }
            }

            // check for duplicate campaign category
            var duplicateCampaigns = campaigns
                .GroupBy(c => c.CampaignCategory)
                .Where(g => g.Count() > 1);

            if (duplicateCampaigns.Any())
            {
                throw new BadRequestException("Duplicate campaign categories are not allowed.");
            }

            var subTotal = items.Sum(i => i.Price * i.Quantity);
            var current = subTotal;

            // order campaigns by category: COUPON(0) > ON_TOP(1) > SEASONAL(2)
            campaigns = campaigns.OrderBy(c => c.CampaignCategory).ToList();

            foreach (var campaign in campaigns)
            {
                var discount = CalculateDiscount(campaign, items, current);
                current -= Math.Min(discount, current);
            }

            return new ApplyResult{ SubTotal = subTotal, Discount = subTotal - current, Total = current};
        }

        private decimal CalculateDiscount(CampaignRequest c, List<ItemRequest> items, decimal current)
        {
            switch (c.CampaignType)
            {
                case CampaignType.FIXED_AMOUNT:
                    {
                        var amount = CheckRequire(c.Amount, "amount", c.CampaignType);
                        if (amount > current)
                        {
                            throw new BadRequestException("Amount must not be greater than the total.");
                        }
                        return amount;
                    }
                case CampaignType.PERCENTAGE:
                    {
                        var percentage = CheckRequire(c.Percentage, "percentage", c.CampaignType);
                        return current * (percentage / 100);
                    }
                case CampaignType.PERCENTAGE_CATEGORY:
                    {
                        var percentage = CheckRequire(c.Percentage, "percentage", c.CampaignType);
                        var itemCategory = c.ItemCategory ?? throw new BadRequestException($"{c.CampaignType} requires item category.");
                        var categoryTotal = items.Where(i => i.Category == itemCategory).Sum(i => i.Price * i.Quantity);
                        return categoryTotal * (percentage / 100);
                    }
                case CampaignType.POINTS:
                    {
                        var point = CheckRequire(c.Point, "point", c.CampaignType);
                        return Math.Min(point, current * 0.20m); // capped at 20% of the total
                    }
                case CampaignType.SPECIAL:
                    {
                        var x = CheckRequire(c.EveryX, "every_x", c.CampaignType);
                        var y = CheckRequire(c.DiscountY, "discount_y", c.CampaignType);
                        if (x <= y)
                        {
                            throw new BadRequestException($"{c.CampaignType} requires every_x to be greater than 'discount_y'.");
                        }
                        return Math.Floor(current / x) * y;
                    }
                default:
                    throw new BadRequestException($"Unknown campaign type: {c.CampaignType}.");

            }
        }

        // check value required and not negative
        private decimal CheckRequire(decimal? value, string fieldName, CampaignType CampaignType)
        {
            if (value == null)
            {
                throw new BadRequestException($"Campaign {CampaignType} requires {fieldName}.");
            }
            if (value < 0)
            {
                throw new BadRequestException($"'{fieldName}' must not be negative.");
            }
            return value.Value;
        }
    }
}
