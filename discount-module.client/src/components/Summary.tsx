import { Item } from "./Item";
import { Total } from "./Total";

export const Summary = () => {
  return (
    <div className="px-4 lg:px-6 py-4 bg-indigo-50 lg:bg-white rounded-md">
      <div className="grid grid-cols-[3fr_1fr_2fr_2fr] md:grid-cols-[4fr_1fr_2fr_2fr] gap-2 lg:gap-3 py-1 border-t-2 border-b-2 border-gray-200 text-[10px] md:text-sm lg:text-sm font-bold text-gray-500">
        <div>ITEM NAME</div>
        <div className="text-right">QTY</div>
        <div className="text-right">PRICE</div>
        <div className="text-right">AMOUNT</div>
      </div>
      <Item name="Hoody" quantity={1} price={500} />
      <Item name="Hat" quantity={2} price={2000} />
      <div className="py-1 border-t-2 border-gray-200"></div>
      <div>
        <Total className="font-semibold" label="Sub Total" price={4500} />
        <Total className="font-semibold" label="Discount" price={800} />
        <div className="py-1 border-t-2 border-gray-200"></div>
        <Total className="font-black" label="Total" price={3700} />
      </div>
    </div>
  );
};
