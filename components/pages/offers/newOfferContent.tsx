import React, { Fragment } from 'react';
import Header from "components/shared/header";
import useNewOffer from 'hooks/newOffer';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import TextInput from 'components/generic/textInput';
import Button from 'components/generic/button';

const newOfferContent = (): JSX.Element => {
  const { handleUpload, schema, loading } = useNewOffer()
  const { handleSubmit, control, formState } = useForm({
    resolver: yupResolver(schema),
    mode: 'onChange',
    defaultValues: { title: '', desc: '' , date : ''},
  })

  const isFormValid = formState.isValid

  const titleInput = (
    <TextInput
      name="title"
      label={'Titulo'}
      placeholder={'Titulo de la ofera'}
      maxLength={70}
      control={control}
    />
  )
  const descInput = (
    <TextInput
      name="desc"
      label={'Descripcion'}
      placeholder={'Descripcion de la oferta'}
      maxLength={16}
      control={control}
    />
  )

  const dateInput = (
    <TextInput
      name="date"
      label={'Fecha expiracion'}
      placeholder={'dd/mm/yyyy'}
      maxLength={16}
      control={control}
    />
  )

  const inputs = {
    title: titleInput,
    desc: descInput,
    date: dateInput
  }

  return (
    <>
      <Header ></Header>
      <div className='w-full justify-center flex bg-[#d9d9d9]'>
        <div className='w-4/5 md:w-1/2 h-auto flex flex-col justify-around items-center mt-[30px] md:mt-[0px]'>
            <form onSubmit={handleSubmit(handleUpload)} className="flex-1 w-full flex flex-col space-y-24 items-center justify-evenly my-[50px]">
                <Fragment >{inputs['title']}</Fragment>
                <Fragment >{inputs['desc']}</Fragment>
                <Fragment >{inputs['date']}</Fragment>
                <div className='flex flex-col md:flex-row w-full items-center justify-between mt-[20px]'>
                    <div className='flex flex-col w-4/5 md:w-2/5 h-[150px] items-center justify-evenly rounded-[20px] p-[20px] bg-white'>
                        <span className='text-lg'> Busco a alguien</span>
                        <input type='radio'></input>
                    </div>
                    <div className='flex flex-col w-4/5 md:w-2/5 h-[150px] items-center justify-evenly rounded-[20px] p-[20px] bg-white mt-[20px] md:mt-[0px]'>
                        <span className='text-lg'>Ofrezco mis servicios</span>
                        <input type='radio'></input>
                    </div>
                </div>
                <div className="hidden lg:block">
                <Button
                    appearance="blue"
                    size="medium"
                    disabled={!isFormValid || loading}
                    block
                >
                    {loading ? 'Publicando...' : 'Publicar'}
                </Button>
                </div>

                <div className="flex lg:hidden">
                <Button
                    appearance="blue"
                    size="medium"
                    disabled={!isFormValid || loading}
                    block
                >
                {loading ? 'Publicando...' : 'Publicar'}
                </Button>
                </div>
            </form>
        </div>
      </div>
    </>
  );
};

export default newOfferContent;
