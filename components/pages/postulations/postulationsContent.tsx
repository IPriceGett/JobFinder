import React from 'react';
import Header from "components/shared/header";
import PostulationCard from './postulationCard';

const postulationsContent = (): JSX.Element => {
    const postulations = [{title:'1', state:'rejected' },{title:'1', state:'rejected' },{title:'1', state:'accepted' },{title:'1', state:'pendient' },{title:'1', state:'pendient' },{title:'1', state:'accepted' }]
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
                <PostulationCard title={index.toString()} state={element.state}></PostulationCard>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default postulationsContent;
