import React, { useEffect, useState } from 'react';
import Header from "components/shared/header";
import getUser from 'utils/session';

const profileContent = (): JSX.Element => {
  const [usuario, setUsuario] = useState(    {
    "name":"",
    "phone":"",
    "email":"",
    "pass":"",
    "org":"",
    "ocu":"",
    "img":""
})

useEffect(()=>{
    setUsuario(getUser())
},[])
  return (
    <>
      <Header ></Header>
      <div className='flex flex-col md:flex-row w-full h-[800px] items-center justify-center'>
        <div className='w-full md:w-1/2 flex flex-col items-center justify-evenly h-3/5'>
            <div className='h-[120px] w-[120px] rounded-full bg-[#D9D9D9]'>
              <img src={usuario.img} className="object-contain w-full h-full rounded-full"></img>
            </div>
            <span className='mt-[2%]'>{usuario.name}</span>
            <span className='mt-[2%]'>{usuario.email}</span>
            <span className='mt-[2%]'>{usuario.phone}</span>
            <span className='mt-[2%]'>{usuario.ocu}</span>
        </div>
        <div className='w-full md:w-1/2 flex flex-col items-center justify-evenly h-3/5'>
            <div className='w-1/2 h-[70%] bg-[#d9d9d9] rounded-[20px]'>

            </div>
            <div className='w-1/2 h-[10%] bg-[#d9d9d9] rounded-[20px] items-center flex justify-center'>
                <span>descargar cv</span>
            </div>
        </div>
      </div>
    </>
  );
};

export default profileContent;
