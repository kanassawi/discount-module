namespace discount_module.Server.Exceptions
{
    public class BadRequestException : Exception
    {
        public string? Msg { get; }
        public BadRequestException(string? msg)
        {
            Msg = msg;
        }
    }
}
