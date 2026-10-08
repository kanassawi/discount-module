// import { useState } from "react";
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
  // const [items, setItems] = useState<number[]>([1]);

  // const handleAddItem = () => {
  //   setItems((prev) => [...prev, Date.now()]);
  // };

  // const handleDeleteItem = (id: number) => {
  //   setItems((prev) => prev.filter((item) => item !== id));
  // };

  return (
    <div className="min-h-screen bg-gray-100">
      <Headbar />
      <div className="lg:flex lg:justify-between">
        <LeftSection>
          {/* items section */}
          <Title title="Items" />
          <div>
            <ItemForm />
            <ItemForm />
          </div>
          <AddButton lebel="Add new item" />

          {/* campaigns section */}
          <Title title="Campaign" />
          <div>
            <CampaignForm />
            <CampaignForm />
          </div>
          <AddButton lebel="Add more campaign" />
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
