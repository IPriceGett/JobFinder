import Button from "components/generic/button";
import { ReactNode } from "react";

type Props = {
  children?: ReactNode | string;
  title: string;
};

const publicationCard = ({ title, children }: Props): JSX.Element => {
  return (
    <>
      <div className="rounded-[10px] bg-[#D9D9D9] flex flex-col items-center justify-around h-[160px] w-[300px] md:w-[400px]">
        <span className="text-2xl">{title}</span>
        <div className="flex items-center justify-around w-full">
          <div className="w-2/5">
            <Button appearance="blue" size="small" block onClick={() => {}}>
              {"detalles"}
            </Button>
          </div>
          <div className="w-2/5">
            <Button appearance="delete" size="small" block onClick={() => {}}>
              {"cancelar"}
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default publicationCard;
