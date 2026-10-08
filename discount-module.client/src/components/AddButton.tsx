import { PlusCircleIcon } from "@heroicons/react/24/solid";

type Props = {
  lebel: string;
  onAdd: () => void;
};
export const AddButton = (props: Props) => {
  return (
    <button
      className="h-8 md:h-10 flex items-center text-xs md:text-sm font-semibold md:font-bold text-indigo-500 hover:cursor-pointer"
      onClick={props.onAdd}
    >
      <PlusCircleIcon className="mr-1 size-4 lg:size-6 text-indigo-500" />
      {props.lebel}
    </button>
  );
};
