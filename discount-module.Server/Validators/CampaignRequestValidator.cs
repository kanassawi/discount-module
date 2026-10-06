using discount_module.Server.Models;
using FluentValidation;

namespace discount_module.Server.Validators
{
    public class CampaignRequestValidator : AbstractValidator<CampaignRequest>
    {
        public CampaignRequestValidator()
        {
            RuleFor(x => x.CampaignType)
                .IsInEnum().WithMessage("Invalid campaign type.");
            RuleFor(x => x.CampaignCategory)
                .IsInEnum().WithMessage("Invalid campaign category.");
            RuleFor(x => x.Amount)
                .GreaterThan(0).WithMessage("Campaign amount must be greater than zero.");
            RuleFor(x => x.Percentage)
                .InclusiveBetween(1, 100).WithMessage("Campaign percentage must be between 0 and 100.");
            RuleFor(x => x.ItemCategory)
                .IsInEnum().WithMessage("Invalid item category.");
            RuleFor(x => x.Point)
                .GreaterThan(0).WithMessage("Campaign point must be greater than zero.");
            RuleFor(x => x.EveryX)
                .GreaterThan(0).WithMessage("Campaign every_x must be greater than zero.");
            RuleFor(x => x.DiscountY)
                .GreaterThan(0).WithMessage("Campaign discount_y must be greater than zero.");
        }
    }
}
