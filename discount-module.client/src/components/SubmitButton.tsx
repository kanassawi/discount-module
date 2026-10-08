import { ArrowTrendingDownIcon } from "@heroicons/react/24/solid";

type Props = {
  func?: () => void;
};

export const SubmitButton = (props: Props) => {
  return (
    <button
      className="h-8 px-2 flex items-center text-xs md:text-sm font-semibold md:font-bold text-white hover:cursor-pointer bg-indigo-500 rounded-md"
      onClick={props.func}
    >
      <ArrowTrendingDownIcon className="mr-1 size-4 lg:size-6 text-white" />
      Calculate Discount
    </button>
  );
};
