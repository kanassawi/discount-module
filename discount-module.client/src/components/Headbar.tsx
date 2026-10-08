import { ForwardIcon } from "@heroicons/react/24/solid";

export const Headbar = () => {
  return (
    <div className="h-12 lg:h-16 px-5 lg:px-20 sticky top-0 flex justify-start items-center bg-white border-b-2 border-b-gray-300 shadow-sm">
      <div className="p-1 border border-gray-400 rounded-lg shadow-md">
        <ForwardIcon className="size-4 md:size-5 text-red-600" />
      </div>
      <div className="ml-2 text-sm md:text-lg font-semibold md:font-bold text-blue-900">
        Discont Calculator
      </div>
    </div>
  );
};
