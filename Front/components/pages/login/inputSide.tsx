import { ReactNode } from "react";

type Props = {
  children?: ReactNode | string;
  title: string;
};

const inputSide = ({ title, children }: Props): JSX.Element => {
  return (
    <div
      className={
        "flex h-[1000px] items-center justify-around py-[80px] px-[20px] md:p-[80px] bg-white flex-col w-full md:w-1/2"
      }
    >
      <div className="rounded-[10px] h-[850px] bg-[#D9D9D9] w-full md:w-[70%] flex-col flex items-center justify-around">
        <span className="text-2xl text-white mt-[15px]">{title}</span>
        {children ? children : <></>}
      </div>
    </div>
  );
};

export default inputSide;
