import { BackspaceIcon } from "@heroicons/react/24/solid";
import {
  campaignCategoryMap,
  type CampaignRequest,
  type CampaignRequestForm,
} from "../models/CampaignRequest";

type Props = {
  campaign: CampaignRequestForm;
  onChange: (id: number, field: keyof CampaignRequest, value: number) => void;
  onDelete: () => void;
  isUsed: (id: number, type: number) => boolean;
};

export const CampaignForm = (props: Props) => {
  return (
    <div className="p-2 grid lg:grid-cols-[4fr_2fr_2fr_1fr] gap-2 bg-gray-50 border-2 border-gray-200 rounded-md text-[10px] md:text-sm lg:text-sm">
      <div>
        <div className="font-bold text-gray-500">Campaign *</div>
        <select
          className="w-full p-1 border-2 border-gray-200 rounded-md text-semibold text-gray-800"
          value={props.campaign.campaign_type}
          onChange={(e) => {
            const campaignType = Number(e.target.value);
            const campaignCategory = campaignCategoryMap[campaignType];

            props.onChange(props.campaign.id, "campaign_type", campaignType);
            props.onChange(
              props.campaign.id,
              "campaign_category",
              campaignCategory,
            );
          }}
        >
          <option value={0} disabled={props.isUsed(props.campaign.id, 0)}>
            Fixed
          </option>
          <option value={1} disabled={props.isUsed(props.campaign.id, 1)}>
            Percentage
          </option>
          <option value={2} disabled={props.isUsed(props.campaign.id, 2)}>
            Percentage by category
          </option>
          <option value={3} disabled={props.isUsed(props.campaign.id, 3)}>
            Point
          </option>
          <option value={4} disabled={props.isUsed(props.campaign.id, 4)}>
            Every X discount Y
          </option>
        </select>
      </div>

      {props.campaign.campaign_type === 0 && (
        <>
          <div>
            <div className="font-bold text-gray-500">Amount *</div>
            <input
              className="w-full p-1 border-2 border-gray-200 rounded-md text-semibold text-gray-800"
              type="number"
              value={props.campaign.amount ?? ""}
              onChange={(e) =>
                props.onChange(
                  props.campaign.id,
                  "amount",
                  Number(e.target.value),
                )
              }
            />
          </div>
          <div></div>
        </>
      )}

      {props.campaign.campaign_type === 1 && (
        <>
          <div>
            <div className="font-bold text-gray-500">Percentage *</div>
            <input
              className="w-full p-1 border-2 border-gray-200 rounded-md text-semibold text-gray-800"
              type="number"
              value={props.campaign.percentage ?? ""}
              onChange={(e) =>
                props.onChange(
                  props.campaign.id,
                  "percentage",
                  Number(e.target.value),
                )
              }
            />
          </div>
          <div></div>
        </>
      )}

      {props.campaign.campaign_type === 2 && (
        <>
          <div>
            <div className="font-bold text-gray-500">Percentage *</div>
            <input
              className="w-full p-1 border-2 border-gray-200 rounded-md text-semibold text-gray-800"
              type="number"
              value={props.campaign.percentage ?? ""}
              onChange={(e) =>
                props.onChange(
                  props.campaign.id,
                  "percentage",
                  Number(e.target.value),
                )
              }
            />
          </div>
          <div>
            <div className="font-bold text-gray-500">Category *</div>
            <select
              className="w-full p-1 border-2 border-gray-200 rounded-md text-semibold text-gray-800"
              value={props.campaign.item_category ?? ""}
              onChange={(e) =>
                props.onChange(
                  props.campaign.id,
                  "item_category",
                  Number(e.target.value),
                )
              }
            >
              <option value={0}>Clothing</option>
              <option value={1}>Accessories</option>
              <option value={2}>Electronics</option>
            </select>
          </div>
        </>
      )}

      {props.campaign.campaign_type === 3 && (
        <>
          <div>
            <div className="font-bold text-gray-500">Point *</div>
            <input
              className="w-full p-1 border-2 border-gray-200 rounded-md text-semibold text-gray-800"
              type="number"
              value={props.campaign.point ?? ""}
              onChange={(e) =>
                props.onChange(
                  props.campaign.id,
                  "point",
                  Number(e.target.value),
                )
              }
            />
          </div>
          <div></div>
        </>
      )}

      {props.campaign.campaign_type === 4 && (
        <>
          <div>
            <div className="font-bold text-gray-500">Every X *</div>
            <input
              className="w-full p-1 border-2 border-gray-200 rounded-md text-semibold text-gray-800"
              type="number"
              value={props.campaign.every_x ?? ""}
              onChange={(e) =>
                props.onChange(
                  props.campaign.id,
                  "every_x",
                  Number(e.target.value),
                )
              }
            />
          </div>
          <div>
            <div className="font-bold text-gray-500">Discount Y *</div>
            <input
              className="w-full p-1 border-2 border-gray-200 rounded-md text-semibold text-gray-800"
              type="number"
              value={props.campaign.discount_y ?? ""}
              onChange={(e) =>
                props.onChange(
                  props.campaign.id,
                  "discount_y",
                  Number(e.target.value),
                )
              }
            />
          </div>
        </>
      )}

      <button
        onClick={props.onDelete}
        className="w-full flex justify-end hover:cursor-pointer"
      >
        <BackspaceIcon className="size-4 md:size-6 text-red-600" />
      </button>
    </div>
  );
};
