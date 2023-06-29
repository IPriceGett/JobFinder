import React, { useEffect, useReducer, useState } from 'react';
import Header from "components/shared/header";
import Button from 'components/generic/button';
import axios from 'axios';
import getUser from 'utils/session';
import { useRouter } from 'next/router';

const offerDetailContent = (): JSX.Element => {
  const { push } = useRouter()
  const [offer, setOffer] = useState({title:"", owner:"", icon:"",number:"", description: ""})
  useEffect(()=>{
    const fetchPostulations = async () => {
    let idOffer = new URLSearchParams(window.location.search)
      try {
        const response = await axios.post('http://localhost:5000/offer/offer', {id: idOffer.get("id")}
        );
        if(response.data){
          console.log(response.data)
          setOffer(response.data)
        } 
      } catch (error) {
        console.error('Error al enviar el archivo:', error);
      }
    }
    fetchPostulations()
  },[])

  const postulate = async() =>{
    let user = getUser()
    let idOffer = new URLSearchParams(window.location.search)
      try {
        const response = await axios.post('http://localhost:5000/postulation/create', {userId: user.id, offerId: idOffer.get("id"), status: 1}
        );
        if(response.data){
          console.log(response.data)
          push("/postulations")
        } 
      } catch (error) {
        console.error('Error al enviar el archivo:', error);
      }
  }

  return (
    <>
      <Header ></Header>
      <div className='flex flex-col py-[40px] px-[30px] md:px-[300px] items-center justify-center'>
        <div className='flex flex-col md:flex-row items-center justify-evenly'>
            <div className='w-[200px] h-[200px] rounded-full md:mr-[40px] bg-[#D9D9D9]'>
              <img src={"http://localhost:5000/offer/icons/"+offer.icon} className="object-contain w-full h-full rounded-full"></img>
            </div>
            <div className='h-[200px] flex flex-col justify-evenly items-center'>
                <span className='text-2xl font-semibold'>{offer.title}</span>
                <span className='text-2xl font-semibold'>{offer.owner}</span>
                <span className='text-2xl font-semibold'>{offer.number}</span>
            </div>
        </div>
        <div className='w-full h-[370px] bg-[#d9d9d9] rounded-[10px] mt-[60px]'>
          <span className='text-2xl font-semibold ml-[15px]'>{offer.description}</span>
        </div>
        <div className='mt-[60px]'>
            <Button
                appearance='blue'
                size='medium'
                onClick={() => {postulate()}}
            >
                {'Me interesa'}
            </Button>
        </div>
      </div>
    </>
  );
};

export default offerDetailContent;
