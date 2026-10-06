using discount_module.Server.Enums;
using System.Text.Json.Serialization;

namespace discount_module.Server.Models
{
    public class ItemRequest
    {
        [JsonPropertyName("name")]
        public string Name { get; set; } = null!;

        [JsonPropertyName("price")]
        public decimal Price { get; set; }

        [JsonPropertyName("category")]
        public ItemCategory Category { get; set; }
    }
}
