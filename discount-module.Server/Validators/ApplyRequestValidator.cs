using discount_module.Server.Models;
using FluentValidation;

namespace discount_module.Server.Validators
{
    public class ApplyRequestValidator : AbstractValidator<ApplyRequest>
    {
        public ApplyRequestValidator()
        {
            RuleFor(x => x.Items)
                .NotEmpty().WithMessage("Items list cannot be empty.");
            RuleForEach(x => x.Items)
                .SetValidator(new ItemRequestValidator());
            RuleFor(x => x.Campaigns)
                .NotEmpty().WithMessage("Campaigns list cannot be empty.");
            RuleForEach(x => x.Campaigns)
                .SetValidator(new CampaignRequestValidator());
        }
    }
}
