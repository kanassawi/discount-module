using discount_module.Server.Models;
using discount_module.Server.Response;
using discount_module.Server.Services;
using Microsoft.AspNetCore.Mvc;

namespace discount_module.Server.Controllers
{
    [Route("api/campaigns")]
    [ApiController]
    public class CampaignController : ControllerBase
    {
        private readonly ICampaignService _campaignService;

        public CampaignController(ICampaignService campaignService)
        {
            _campaignService = campaignService;
        }

        [HttpPost]
        [Route("calculate")]
        public ActionResult<ApplyResult> CalculateCampaign([FromBody] ApplyRequest request)
        {
            var result = _campaignService.CampaignCalculator(request);
            return Ok(ApiResponse<ApplyResult>.Ok(result, "Campaign calculated successfully"));
        }
    }
}
