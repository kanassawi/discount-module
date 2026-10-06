using discount_module.Server.Enums;

namespace discount_module.Server.Models
{
    public class Campaign
    {
        public CampaignType Type { get; set; }

        public CampaignCategory Category { get; set; }
    }
}
