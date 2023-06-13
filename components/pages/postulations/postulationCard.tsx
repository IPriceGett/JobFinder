import Button from "components/generic/button";
import { ReactNode } from "react";

type Props = {
  children?: ReactNode | string;
  title: string;
  state: string;
};

const postulationCard = ({ title, children, state }: Props): JSX.Element => {
  let button = <div></div>;
  let color = 'text-black-500'
  switch (state) {
    case 'accepted':
        color = 'text-green-500'
        break;
    case 'rejected':
        color = 'text-red-500'
        break;
    case "pendient":
      button = (
        <div className="w-1/2">
          <Button appearance="delete" size="small" block onClick={() => {}}>
            {"cancelar"}
          </Button>
        </div>
      );
      break;

  }
  return (
    <>
      <div className="rounded-[10px] bg-[#D9D9D9] flex flex-col items-center justify-around h-[160px] w-[300px] md:w-[400px]">
        <span className="text-2xl">{title}</span>
        <span>
          Estado: <span className={color}>{state}</span>
        </span>
        {button}
      </div>
    </>
  );
};

export default postulationCard;
