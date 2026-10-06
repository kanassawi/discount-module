using discount_module.Server.Models;

namespace discount_module.Server.Services
{
    public interface ICampaignService
    {
        ApplyResult CampaignCalculator(ApplyRequest request);
    }
}
