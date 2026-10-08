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

export const Calculator = () => {
  const [items, setItems] = useState<number[]>([1]);
  const handleAddItem = () => {
    setItems((prev) => [...prev, Date.now()]);
  };
  const handleDeleteItem = (id: number) => {
    if (items.length > 1) {
      setItems((prev) => prev.filter((item) => item !== id));
    }
  };

  const [campaigns, setCampaigns] = useState<number[]>([1]);
  const handleAddCampaign = () => {
    setCampaigns((prev) => [...prev, Date.now()]);
  };
  const handleDeleteCampaign = (id: number) => {
    if (campaigns.length > 1) {
      setCampaigns((prev) => prev.filter((item) => item !== id));
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
            {items.map((id) => (
              <ItemForm key={id} onDelete={() => handleDeleteItem(id)} />
            ))}
          </div>
          <AddButton onAdd={handleAddItem} lebel="Add new item" />

          {/* campaigns section */}
          <Title title="Campaign" />
          <div className="my-2 flex flex-col gap-2">
            {campaigns.map((id) => (
              <CampaignForm
                key={id}
                onDelete={() => handleDeleteCampaign(id)}
              />
            ))}
          </div>
          <AddButton onAdd={handleAddCampaign} lebel="Apply more campaign" />
          <SubmitButton />
        </LeftSection>

        <RightSection>
          <Title title="Summary" />
          <Summary />
        </RightSection>
      </div>
    </div>
  );
};
