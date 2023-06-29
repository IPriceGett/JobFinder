import axios from "axios";
import Button from "components/generic/button";
import { ReactNode } from "react";

type Props = {
  children?: ReactNode | string;
  title: string;
  state: string;
  id: string;
};

const postulationCard = ({ title, children, state, id }: Props): JSX.Element => {

  const deletePostulation = async () => {
      try {
        const response = await axios.put('http://localhost:5000/postulation/delete', {id: id}
        );
        if(response.data){
          console.log(response.data)
          location.reload();
        } 
      } catch (error) {
        console.error('Error al enviar el archivo:', error);
      }
    }


  let button = <div></div>;
  let color = 'text-black-500'
  let text = ''
  switch (state) {
    case '3':
        color = 'text-green-500'
        break;
    case '2':
        color = 'text-red-500'
        break;
    case "1":
      text = "Pendiente"
      button = (
        <div className="w-1/2">
          <Button appearance="delete" size="small" block onClick={() => {deletePostulation()}}>
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
          Estado: <span className={color}>{text}</span>
        </span>
        {button}
      </div>
    </>
  );
};

export default postulationCard;
