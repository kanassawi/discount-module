using System.Text.Json.Serialization;

namespace discount_module.Server.Models
{
    public class ApplyResult
    {
        [JsonPropertyName("subtotal")]
        public decimal SubTotal { get; set; }

        [JsonPropertyName("discount")]
        public decimal Discount { get; set; }

        [JsonPropertyName("total")]
        public decimal Total { get; set; }
    }
}
