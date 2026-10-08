import { BackspaceIcon } from "@heroicons/react/24/solid";
import { useState } from "react";

type Props = {
  onDelete: () => void;
};
export const CampaignForm = (props: Props) => {
  const [type, setType] = useState<number>(0);

  return (
    <div className="p-2 grid lg:grid-cols-[4fr_2fr_2fr_1fr] gap-2 bg-gray-50 border-2 border-gray-200 rounded-md text-[10px] md:text-sm lg:text-sm">
      <div>
        <div className="font-bold text-gray-500">Campaign *</div>
        <select
          value={type}
          onChange={(e) => setType(Number(e.target.value))}
          className="w-full p-1 border-2 border-gray-200 rounded-md text-semibold text-gray-800"
        >
          <option value={0}>Fixed</option>
          <option value={1}>Percentage</option>
          <option value={2}>Percentage by category</option>
          <option value={3}>Point</option>
          <option value={4}>Every X discount Y</option>
        </select>
      </div>

      {type === 0 && (
        <>
          <div>
            <div className="font-bold text-gray-500">Amount *</div>

            <input
              type="number"
              className="w-full p-1 border-2 border-gray-200 rounded-md text-semibold text-gray-800"
            />
          </div>
          <div></div>
        </>
      )}

      {type === 1 && (
        <>
          <div>
            <div className="font-bold text-gray-500">Percentage *</div>

            <input
              type="number"
              className="w-full p-1 border-2 border-gray-200 rounded-md text-semibold text-gray-800"
            />
          </div>
          <div></div>
        </>
      )}

      {type === 2 && (
        <>
          <div>
            <div className="font-bold text-gray-500">Percentage *</div>

            <input
              type="number"
              className="w-full p-1 border-2 border-gray-200 rounded-md text-semibold text-gray-800"
            />
          </div>
          <div>
            <div className="font-bold text-gray-500">Category *</div>
            <select className="w-full p-1 border-2 border-gray-200 rounded-md text-semibold text-gray-800">
              <option value={0}>Clothing</option>
              <option value={1}>Accessories</option>
              <option value={2}>Electronics</option>
            </select>
          </div>
        </>
      )}

      {type === 3 && (
        <>
          <div>
            <div className="font-bold text-gray-500">Point *</div>

            <input
              type="number"
              className="w-full p-1 border-2 border-gray-200 rounded-md text-semibold text-gray-800"
            />
          </div>
          <div></div>
        </>
      )}

      {type === 4 && (
        <>
          <div>
            <div className="font-bold text-gray-500">Every X *</div>

            <input
              type="number"
              className="w-full p-1 border-2 border-gray-200 rounded-md text-semibold text-gray-800"
            />
          </div>
          <div>
            <div className="font-bold text-gray-500">Discount Y *</div>

            <input
              type="number"
              className="w-full p-1 border-2 border-gray-200 rounded-md text-semibold text-gray-800"
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
