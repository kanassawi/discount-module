using discount_module.Server.Models;
using FluentValidation;

namespace discount_module.Server.Validators
{
    public class ItemRequestValidator : AbstractValidator<ItemRequest>
    {
        public ItemRequestValidator()
        {
            RuleFor(x => x.Name)
                .NotEmpty().WithMessage("Item name cannot be empty.");
            RuleFor(x => x.Price)
                .GreaterThan(0).WithMessage("Item price must be greater than zero.");
            RuleFor(x => x.Quantity)
                .GreaterThan(0).WithMessage("Quantity must be grater than zero");
            RuleFor(x => x.Category)
                .IsInEnum().WithMessage("Invalid item category.");
        }
    }
}
