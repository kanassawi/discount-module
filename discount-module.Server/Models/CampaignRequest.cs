using discount_module.Server.Enums;
using System.Text.Json.Serialization;

namespace discount_module.Server.Models
{
    public class CampaignRequest
    {
        [JsonPropertyName("campaign_type")]
        public CampaignType CampaignType { get; set; }

        [JsonPropertyName("campaign_category")]
        public CampaignCategory CampaignCategory { get; set; }

        [JsonPropertyName("amount")]
        public decimal? Amount { get; set; } = null;

        [JsonPropertyName("percentage")]
        public decimal? Percentage { get; set; } = null;

        [JsonPropertyName("item_category")]
        public ItemCategory? ItemCategory { get; set; } = null;

        [JsonPropertyName("point")]
        public decimal? Point { get; set; } = null;

        [JsonPropertyName("every_x")]
        public decimal? EveryX { get; set; } = null;

        [JsonPropertyName("discount_y")]
        public decimal? DiscountY { get; set; } = null;
    }
}
