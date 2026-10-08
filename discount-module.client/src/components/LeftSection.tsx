import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export const LeftSection = (props: Props) => {
  return (
    <div className="lg:min-h-screen w-full pl-5 pr-5 lg:pl-40 py-2 md:py-4 bg-white">
      {props.children}
    </div>
  );
};
