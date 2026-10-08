import type { ApplyResult } from "../models/ApplyResult";
import type { ItemRequest } from "../models/ItemRequest";
import { Item } from "./Item";
import { Total } from "./Total";

type Props = {
  items: ItemRequest[];
  result: ApplyResult;
};

export const Summary = (props: Props) => {
  return (
    <div className="px-4 lg:px-6 py-4 bg-indigo-50 lg:bg-white rounded-md">
      <div className="grid grid-cols-[3fr_1fr_2fr_2fr] md:grid-cols-[4fr_1fr_2fr_2fr] gap-2 lg:gap-3 py-1 border-t-2 border-b-2 border-gray-200 text-[10px] md:text-sm lg:text-sm font-bold text-gray-500">
        <div>ITEM NAME</div>
        <div className="text-right">QTY</div>
        <div className="text-right">PRICE</div>
        <div className="text-right">AMOUNT</div>
      </div>
      {props.items.map((item, index) => (
        <Item
          key={index}
          name={item.name}
          quantity={item.quantity}
          price={item.price}
        />
      ))}
      <div className="py-1 border-t-2 border-gray-200"></div>
      <div>
        <Total
          className="font-semibold"
          label="Sub Total"
          price={props.result.subtotal}
        />
        <Total
          className="font-semibold"
          label="Discount"
          price={props.result.discount}
        />
        <div className="py-1 border-t-2 border-gray-200"></div>
        <Total
          className="font-black"
          label="Total"
          price={props.result.total}
        />
      </div>
    </div>
  );
};
