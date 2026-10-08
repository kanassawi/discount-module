type Props = {
  name: string;
  quantity: number;
  price: number;
};
export const Item = (props: Props) => {
  const amount = props.price * props.quantity;
  const formatPrice = (price: number) => {
    return price.toLocaleString("en-US", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
  };

  return (
    <div className="grid grid-cols-[3fr_1fr_2fr_2fr] md:grid-cols-[4fr_1fr_2fr_2fr] gap-2 lg:gap-3 py-2 text-[10px] md:text-sm lg:text-sm font-semibold text-gray-800">
      <div>{props.name}</div>
      <div className="text-right">{props.quantity}</div>
      <div className="text-right">{formatPrice(props.price)}</div>
      <div className="text-right">{formatPrice(amount)}</div>
    </div>
  );
};
