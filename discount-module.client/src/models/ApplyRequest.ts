import type { CampaignRequest } from "./CampaignRequest";
import type { ItemRequest } from "./ItemRequest";

export type ApplyRequest = {
  items: ItemRequest[];
  campaigns: CampaignRequest[];
};
