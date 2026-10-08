import { BackspaceIcon } from "@heroicons/react/24/solid";

type Props = {
  onDelete: () => void;
};
export const ItemForm = (props: Props) => {
  return (
    <div className="p-2 grid lg:grid-cols-[2fr_2fr_2fr_2fr_1fr] gap-2 bg-gray-50 border-2 border-gray-200 rounded-md text-[10px] md:text-sm lg:text-sm">
      <div>
        <div className="font-bold text-gray-500">Name *</div>
        <input
          type="text"
          className="w-full p-1 border-2 border-gray-200 rounded-md text-semibold text-gray-800"
        />
      </div>

      <div>
        <div className="font-bold text-gray-500">Quantity *</div>
        <input
          type="number"
          className="w-full p-1 border-2 border-gray-200 rounded-md text-semibold text-gray-800"
        />
      </div>

      <div>
        <div className="font-bold text-gray-500">Price *</div>
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

      <button
        onClick={props.onDelete}
        className="w-full flex justify-end hover:cursor-pointer"
      >
        <BackspaceIcon className="size-4 md:size-6 text-red-600" />
      </button>
    </div>
  );
};
