import React, { useEffect, useState } from 'react';
import Header from "components/shared/header";
import PublicationCard from './publicationCard';
import axios from 'axios';
import getUser from 'utils/session';

const publicationsContent = (): JSX.Element => {
  const [postulations, setPostulations] = useState([])
  useEffect(()=>{
    const fetchPostulations = async () => {
      try {
        let user = getUser()
        const response = await axios.post('http://localhost:5000/offer/byOwner',{userid : user.id}
        );
        if(response.data){
          console.log(response.data)
          setPostulations(response.data)
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
        <span className='text-3xl'>Tus publicaciones</span>
        <p className='w-3/4 text-xl mt-[20px]'>A continuacion estaran todas las ofertas que publicaste, junto con sus respectivos interesados.</p>
        <div className='w-4/5 border-2 border-t-gray-200'></div>
        <div className='container mx-auto my-8'>
          <div className="flex flex-wrap">
            {postulations.map((element, index) => (
              <div key={index} className="w-full sm:w-full md:w-1/2 lg:w-1/3 xl:w-1/3 p-2 flex items-center justify-center">
                <PublicationCard title={element.title} id={element.ID}></PublicationCard>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default publicationsContent;
