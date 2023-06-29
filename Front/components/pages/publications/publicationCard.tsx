import axios from "axios";
import Button from "components/generic/button";
import { ReactNode } from "react";

type Props = {
  children?: ReactNode | string;
  title: string;
  id: number
};

const publicationCard = ({ title, children, id }: Props): JSX.Element => {
  const deletePostulation = async () => {
    try {
      const response = await axios.delete('http://localhost:5000/offer/delete/'+id,
      );
      if(response.data){
        console.log(response.data)
      } 
    } catch (error) {
      console.error('Error al enviar el archivo:', error);
    }
  }

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
            <Button appearance="delete" size="small" block onClick={() => {deletePostulation()}}>
              {"cancelar"}
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default publicationCard;
