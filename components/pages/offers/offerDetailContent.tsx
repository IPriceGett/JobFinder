import React, { useEffect, useReducer } from 'react';
import Header from "components/shared/header";
import Button from 'components/generic/button';
import Offers from '../../../data/offer.json'

const offerDetailContent = (): JSX.Element => {
  let offer = Offers[0]
  useEffect(()=>{
    let id = new URLSearchParams(window.location.search)
    offer = Offers.filter(item => item.id.toString() === id.get("id"))[0]
  },[])
  return (
    <>
      <Header ></Header>
      <div className='flex flex-col py-[40px] px-[30px] md:px-[300px] items-center justify-center'>
        <div className='flex flex-col md:flex-row items-center justify-evenly'>
            <div className='w-[200px] h-[200px] rounded-full md:mr-[40px] bg-[#D9D9D9]'>
              <img src={offer.logo} className="object-contain w-full h-full rounded-full"></img>
            </div>
            <div className='h-[200px] flex flex-col justify-evenly items-center'>
                <span className='text-2xl font-semibold'>{offer.title}</span>
                <span className='text-2xl font-semibold'>{offer.owner}</span>
                <span className='text-2xl font-semibold'>{offer.number}</span>
            </div>
        </div>
        <div className='w-full h-[370px] bg-[#d9d9d9] rounded-[10px] mt-[60px]'>
        </div>
        <div className='mt-[60px]'>
            <Button
                appearance='blue'
                size='medium'
            >
                {'Me interesa'}
            </Button>
        </div>
      </div>
    </>
  );
};

export default offerDetailContent;
