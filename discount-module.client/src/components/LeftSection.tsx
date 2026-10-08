import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export const LeftSection = (props: Props) => {
  return (
    <div className="flex flex-col gap-1 lg:min-h-screen w-full pl-5 pr-5 lg:pl-20 py-2 md:py-4 bg-white">
      {props.children}
    </div>
  );
};
