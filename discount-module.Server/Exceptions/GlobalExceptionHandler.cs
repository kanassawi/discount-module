using discount_module.Server.Response;
using Microsoft.AspNetCore.Diagnostics;
using System.Net;

namespace discount_module.Server.Exceptions
{
    public class GlobalExceptionHandler : IExceptionHandler
    {
        public async ValueTask<bool> TryHandleAsync(HttpContext httpContext, Exception exception, CancellationToken cancellationToken)
        {
            var (status, response) = exception switch
            {
                AppValidationException ex => (
                    HttpStatusCode.BadRequest,
                    ApiResponse<object>.Fail(ex.Errors, ex.Msg)),

                BadRequestException ex => (
                    HttpStatusCode.BadRequest,
                    ApiResponse<object>.Fail(null, ex.Msg)),

                _ => (
                    HttpStatusCode.InternalServerError,
                    ApiResponse<object>.Fail(null, exception.Message))
            };

            httpContext.Response.ContentType = "application/json";
            httpContext.Response.StatusCode = (int)status;

            await httpContext.Response.WriteAsJsonAsync(response, cancellationToken);
            return true;
        }
    }
}
