import type { CampaignRequest } from "../models/CampaignRequest";

const isValidPercentage = (percentage: number | null): boolean => {
  return percentage !== null && percentage >= 0 && percentage <= 100;
};

const isValidNumber = (num: number | null): boolean => {
  return num !== null && num > 0;
};

export const campaignValidate = (campaigns: CampaignRequest[]): boolean =>
  campaigns.every((campaign) => {
    switch (campaign.campaign_type) {
      case 0:
        return isValidNumber(campaign.amount);

      case 1:
        return isValidPercentage(campaign.percentage);

      case 2:
        return (
          isValidPercentage(campaign.percentage) &&
          campaign.item_category !== null
        );

      case 3:
        return isValidNumber(campaign.point);

      case 4:
        return (
          isValidNumber(campaign.every_x) && isValidNumber(campaign.discount_y)
        );

      default:
        return false;
    }
  });
