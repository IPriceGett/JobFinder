import React from 'react';
import Select from 'react-select';
import Header from "components/shared/header";
import _ from 'lodash';
import Offer from './offer';
import Offers from '../../../data/offer.json'

const offerContent = (): JSX.Element => {
  const type = [
    { value: '1', label: 'Seleccione tipo' },
  ];
  const categories = [
    { value: '1', label: 'Categorias' },
  ];
  const handleChangeType = (opcionSeleccionada) => {
    // Lógica a ejecutar cuando se selecciona una opción
    console.log('Opción seleccionada:', opcionSeleccionada);
  };
  const handleChangeCategorie = (opcionSeleccionada) => {
    // Lógica a ejecutar cuando se selecciona una opción
    console.log('Opción seleccionada:', opcionSeleccionada);
  };
  const customStyles = {
    control: (provided, state) => ({
      ...provided,
      border: state.isFocused ? '2px solid #4F46E5' : '1px solid #D1D5DB',
      borderRadius: '1rem',
      boxShadow: 'none',
      '&:hover': {
        borderColor: '#7F9CF5',
      },
    }),
    option: (provided, state) => ({
      ...provided,
      backgroundColor: state.isFocused ? '#4F46E5' : 'transparent',
      color: state.isFocused ? 'white' : '#374151',
    }),
  };
  const offers: any[] = Offers;
  return (
    <>
      <Header ></Header>
      <div className="flex flex-col px-[20px] md:px-[200px] py-[40px]">
        <span className="text-2xl">Ofertas</span>
        <div className="mt-[40px] flex">
          <Select
            options={type}
            onChange={handleChangeType}
            styles={customStyles}
            placeholder="Seleccione tipo"
          />
          <Select
            options={categories}
            onChange={handleChangeCategorie}
            styles={customStyles}
            placeholder="Categorias"
            className='ml-[5px]'
          />
        </div>
        <div className='container mx-auto my-8'>
          <div className="flex flex-wrap">
            {offers.map((element, index) => (
              <div key={index} className="w-full sm:w-full md:w-1/2 lg:w-1/3 xl:w-1/3 p-2">
                <Offer title={element.title} img={element.logo} id={element.id}></Offer>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default offerContent;
