using System.Text.Json.Serialization;

namespace discount_module.Server.Response
{
    public class ApiResponse<T>
    {
        [JsonPropertyName("success")]
        public bool Success { get; set; }

        [JsonPropertyName("message")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public string? Msg { get; set; }

        [JsonPropertyName("data")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public T? Data { get; set; }

        [JsonPropertyName("errors")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public List<InvalidItem>? Errors { get; set; }

        public static ApiResponse<T> Ok(T? data, string? msg)
        {
            return new ApiResponse<T>
            {
                Success = true,
                Msg = msg,
                Data = data,
            };
        }

        public static ApiResponse<T> Fail(List<InvalidItem>? errors, string? msg)
        {
            return new ApiResponse<T>
            {
                Success = false,
                Msg = msg,
                Errors = errors,
            };
        }

    }

    public class InvalidItem
    {
        [JsonPropertyName("field")]
        public string Field { get; set; } = null!;

        [JsonPropertyName("message")]
        public string Msg { get; set; } = null!;
    }
}
