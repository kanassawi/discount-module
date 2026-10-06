using FluentValidation.Results;
using discount_module.Server.Response;
namespace discount_module.Server.Exceptions
{
    public class AppValidationException : Exception
    {
        public string? Msg { get; }
        public List<InvalidItem> Errors { get; }

        public AppValidationException(List<ValidationFailure> errors, string? msg)
        {
            Errors = errors.Select(e => new InvalidItem
            {
                Field = e.PropertyName,
                Msg = e.ErrorMessage
            }).ToList();
            Msg = msg;
        }
    }
}
