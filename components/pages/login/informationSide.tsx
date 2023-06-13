import { ReactNode } from "react";

type Props = {
  children?: ReactNode | string;
  title: string;
  desc: string;
};

const informationSide = ({ title, desc, children }: Props): JSX.Element => {
  return (
    <div
      className={
        "flex h-[1000px] items-center justify-around p-[80px] bg-[#D9D9D9] flex-col w-full md:w-1/2"
      }
    >
      <span className="text-2xl">{title}</span>
      <span>{desc}</span>
      {children ? children : <></>}
    </div>
  );
};

export default informationSide;
