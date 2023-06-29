import React, { useEffect, useState } from 'react';
import Header from "components/shared/header";
import PostulationCard from './postulationCard';
import axios from 'axios';
import getUser from 'utils/session';

const postulationsContent = (): JSX.Element => {
    const [postulations, setPostulations] = useState([])
    useEffect(()=>{
      const fetchPostulations = async () => {
        let user = getUser()
        try {
          const response = await axios.post('http://localhost:5000/postulation/getPostulations', {userid: user.id}
          );
          if(response.data){
            console.log(response.data)
            setPostulations(response.data.filter(e => e.status != 4))
          } 
        } catch (error) {
          console.error('Error al enviar el archivo:', error);
        }
      }
      fetchPostulations()
    },[])
  return (
    <>
      <Header ></Header>
      <div className='px-[20px] md:px-[120px] py-[50px] flex items-start flex-col'>
        <span className='text-3xl'>Tus postulaciones</span>
        <p className='w-3/4 text-xl mt-[20px]'>A continuacion estaran todas las ofertas a las que les diste “me interesa”, aqui podras ver si fuiste aceptado o no.</p>
        <div className='w-4/5 border-2 border-t-gray-200'></div>
        <div className='container mx-auto my-8'>
          <div className="flex flex-wrap">
            {postulations.map((element, index) => (
              <div key={index} className="w-full sm:w-full md:w-1/2 lg:w-1/3 xl:w-1/3 p-2 flex items-center justify-center">
                <PostulationCard title={element.title} state={element.status.toString()} id={element.id.toString()}></PostulationCard>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default postulationsContent;
