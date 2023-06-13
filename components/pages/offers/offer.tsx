import Button from "components/generic/button";
import { useRouter } from "next/router";
import { ReactNode } from "react";

type Props = {
  children?: ReactNode | string;
  title: string;
  img: string;
  id: number;
};

const offerCard = ({ title,img, id, children }: Props): JSX.Element => {
  const { push } = useRouter()
  return (
    <>
        <div className="rounded-[10px] bg-[#D9D9D9] flex flex-col items-center justify-around h-[320px] w-[300px]">
            <div className="h-[100px] w-[100px] rounded-full bg-white">
              <img src={img} className="object-contain w-full h-full rounded-full"></img>
            </div>
            <span className="text-2xl">{title}</span>
            <div className="w-1/2">
                <Button
                appearance="blue"
                size="small"
                block
                onClick={()=>{push("/offers/detail?id="+id)}}
                >
                    {'saber mas'}
                </Button>
            </div>
        </div>
    </>
  );
};

export default offerCard;
