using System.Text.Json.Serialization;

namespace discount_module.Server.Models
{
    public class ApplyRequest
    {
        [JsonPropertyName("items")]
        public List<ItemRequest> Items { get; set; } = null!;

        [JsonPropertyName("campaigns")]
        public List<CampaignRequest> Campaigns { get; set; } = null!;
    }
}
