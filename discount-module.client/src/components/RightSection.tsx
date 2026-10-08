import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
};
export const RightSection = (props: Props) => {
  return (
    <div className="lg:min-h-screen w-full pl-5 pr-5 lg:pr-20 py-2 md:py-4 bg-white lg:bg-gray-100">
      {props.children}
    </div>
  );
};
