type Props = {
  label: string;
  price: number;
  className?: string;
};
export const Total = (props: Props) => {
  const formatPrice = (price: number) => {
    return price.toLocaleString("en-US", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
  };
  return (
    <div
      className={`${props.className} grid grid-cols-[3fr_3fr_3fr] lg:grid-cols-[4fr_2fr_3fr] gap-4 lg:gap-3 py-1 text-[10px] md:text-sm lg:text-sm text-gray-800`}
    >
      <div></div>
      <div className="text-right">{props.label}</div>
      <div className="text-right">{formatPrice(props.price)}</div>
    </div>
  );
};
