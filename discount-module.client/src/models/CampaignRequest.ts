import type { ItemCategory } from "./ItemRequest";

export type CampaignType = 0 | 1 | 2 | 3 | 4;

export type CampaignCategory = 0 | 1 | 2;

export const campaignCategoryMap: Record<number, number> = {
  0: 0,
  1: 0,
  2: 1,
  3: 1,
  4: 2,
};

export type CampaignRequest = {
  campaign_type: CampaignType;
  campaign_category: CampaignCategory;
  amount: number | null;
  percentage: number | null;
  item_category: ItemCategory | null;
  point: number | null;
  every_x: number | null;
  discount_y: number | null;
};

export type CampaignRequestForm = CampaignRequest & {
  id: number;
};
