import { useState } from "react";
import {
  AddButton,
  CampaignForm,
  Headbar,
  ItemForm,
  LeftSection,
  RightSection,
  SubmitButton,
  Summary,
  Title,
} from "../components";
import type { ItemRequest, ItemRequestForm } from "../models/ItemRequest";
import {
  campaignCategoryMap,
  type CampaignRequest,
  type CampaignRequestForm,
} from "../models/CampaignRequest";
import type { ApplyRequest } from "../models/ApplyRequest";
import { applyCampaign } from "../apis/applyCampaign";
import axios from "axios";
import type { ApplyResult } from "../models/ApplyResult";

export const Calculator = () => {
  // items management
  const [items, setItems] = useState<ItemRequestForm[]>([
    { id: 0, name: "", quantity: 0, price: 0, category: 0 },
  ]);
  const handleAddItem = () => {
    setItems((prev) => [
      ...prev,
      {
        id: Date.now(),
        name: "",
        quantity: 0,
        price: 0,
        category: 0,
      },
    ]);
  };
  const handleDeleteItem = (id: number) => {
    setItems((prev) => {
      if (prev.length <= 1) return prev;
      return prev.filter((item) => item.id !== id);
    });
  };
  const onChangeItem = (
    id: number,
    field: keyof ItemRequest,
    value: string | number,
  ) => {
    setItems((prev) =>
      prev.map((item) => (item.id === id ? { ...item, [field]: value } : item)),
    );
  };

  // campaign management
  const [campaigns, setCampaigns] = useState<CampaignRequestForm[]>([
    {
      id: 0,
      campaign_type: 0,
      campaign_category: 0,
      amount: null,
      percentage: null,
      item_category: 0,
      point: null,
      every_x: null,
      discount_y: null,
    },
  ]);
  const handleAddCampaign = () => {
    if (campaigns.length < 3) {
      setCampaigns((prev) => [
        ...prev,
        {
          id: Date.now(),
          campaign_type: 0,
          campaign_category: 0,
          amount: null,
          percentage: null,
          item_category: 0,
          point: null,
          every_x: null,
          discount_y: null,
        },
      ]);
    }
  };
  const handleDeleteCampaign = (id: number) => {
    if (campaigns.length > 1) {
      setCampaigns((prev) => {
        if (prev.length <= 1) return prev;
        return prev.filter((item) => item.id !== id);
      });
    }
  };
  const onChangeCampaign = (
    id: number,
    field: keyof CampaignRequest,
    value: number,
  ) => {
    setCampaigns((prev) =>
      prev.map((campaign) =>
        campaign.id === id ? { ...campaign, [field]: value } : campaign,
      ),
    );
  };
  const isCategoryUsed = (id: number, type: number) => {
    const category = campaignCategoryMap[type];
    return campaigns.some(
      (campaign) =>
        campaign.id !== id && campaign.campaign_category === category,
    );
  };

  const [response, setResponse] = useState<ApplyResult>({
    subtotal: 0,
    discount: 0,
    total: 0,
  });
  const [itemSummary, setItemSummary] = useState<ItemRequest[]>([]);

  const handleSubmit = async () => {
    const request: ApplyRequest = { items, campaigns };
    try {
      const response: ApplyResult = await applyCampaign(request);
      setResponse(response);
      setItemSummary(items);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.log(error.response?.data);
      }
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Headbar />
      <div className="lg:flex lg:justify-between">
        <LeftSection>
          {/* items section */}
          <Title title="Items" />
          <div className="my-2 flex flex-col gap-2">
            {items.map((item) => (
              <ItemForm
                key={item.id}
                item={item}
                onChange={onChangeItem}
                onDelete={() => handleDeleteItem(item.id)}
              />
            ))}
          </div>
          <AddButton onAdd={handleAddItem} lebel="Add new item" />

          {/* campaigns section */}
          <Title title="Campaign" />
          <div className="my-2 flex flex-col gap-2">
            {campaigns.map((campaign) => (
              <CampaignForm
                key={campaign.id}
                campaign={campaign}
                onChange={onChangeCampaign}
                onDelete={() => handleDeleteCampaign(campaign.id)}
                isUsed={isCategoryUsed}
              />
            ))}
          </div>
          <AddButton onAdd={handleAddCampaign} lebel="Apply more campaign" />

          <div className="flex justify-end">
            <SubmitButton onApply={handleSubmit} />
          </div>
        </LeftSection>

        <RightSection>
          <Title title="Summary" />
          <Summary items={itemSummary} result={response} />
        </RightSection>
      </div>
    </div>
  );
};
