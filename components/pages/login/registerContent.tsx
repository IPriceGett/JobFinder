import Header from "components/shared/header";
import InformationSide from "./informationSide";
import InputSide from "./inputSide";
import TextInput from "components/generic/textInput";
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from "react-hook-form";
import Button from "components/generic/button";
import { Fragment } from "react";
import useRegister from "hooks/register";

const registerContent = (): JSX.Element => {
  const { handleRegister, schema, loading } = useRegister()
  const { handleSubmit, control, formState } = useForm({
    resolver: yupResolver(schema),
    mode: 'onChange',
    defaultValues: { email: '', password: '', name: '', phone : '', org: '', ocu : 'Buscar Trabajo'},
  })

  const isFormValid = formState.isValid

  const nombreInput = (
    <TextInput
      name="name"
      label={'Nombre'}
      placeholder={'Jhon Doe'}
      maxLength={70}
      control={control}
    />
  )
  const telInput = (
    <TextInput
      name="phone"
      label={'Telefono'}
      placeholder={'+569'}
      maxLength={70}
      control={control}
    />
  )
  const orgInput = (
    <TextInput
      name="org"
      label={'Organizacion'}
      placeholder={'JobFinder'}
      maxLength={70}
      control={control}
    />
  )

  const emailInput = (
    <TextInput
      name="email"
      label={'Correo electronico'}
      placeholder={'example@mail.com'}
      maxLength={70}
      control={control}
    />
  )
  const passInput = (
    <TextInput
      name="password"
      type="password"
      label={'Contraseña'}
      placeholder={'*******'}
      maxLength={16}
      control={control}
    />
  )

  const ocupacionInput = (
    <TextInput
      name="ocu"
      label={'ocupacion'}
      placeholder={'Buscar Trabajo'}
      maxLength={40}
      control={control}
      list="ocupaciones"
    />
  )
  const inputs = {
    email: emailInput,
    password: passInput,
    name: nombreInput,
    phone: telInput,
    org: orgInput,
    ocu: ocupacionInput
  }
  return (
    <>
      <Header></Header>
      <div className="w-full flex flex-col md:flex-row">
        <datalist id="ocupaciones">
          <option value="Buscar Trabajo"/>
          <option value="Ofrecer Trabajo"/>
          <option value="Persona Natural"/>
        </datalist>
      <InputSide title="Registrate">
          <form onSubmit={handleSubmit(handleRegister)} className="flex-1 w-[90%] flex flex-col items-center justify-evenly">
            <Fragment >{inputs['name']}</Fragment>
            <Fragment >{inputs['phone']}</Fragment>
            <Fragment >{inputs['email']}</Fragment>
            <Fragment >{inputs['password']}</Fragment>
            <Fragment >{inputs['ocu']}</Fragment>
            <Fragment >{inputs['org']}</Fragment>
            <div className="hidden lg:block">
              <Button
                appearance="blue"
                size="medium"
                disabled={!isFormValid || loading}
                block
              >
                {loading ? 'Registrando...' : 'Registrate'}
              </Button>
            </div>

            <div className="flex lg:hidden">
              <Button
                appearance="blue"
                size="medium"
                disabled={!isFormValid || loading}
                block
              >
              {loading ? 'Registrnado...' : 'Registrate'}
              </Button>
            </div>
          </form>
        </InputSide>
        <InformationSide
          title="ya tienes cuenta?"
          desc="bla bla bla"
        >
            <div className="hidden lg:block">
              <Button
                appearance="gray"
                size="medium"
                disabled={false}
                block
                onClick={() => {}}
              >
                {'Inicia sesion'}
              </Button>
            </div>

            <div className="flex lg:hidden">
              <Button
                appearance="gray"
                size="medium"
                disabled={false}
                block
                onClick={() => {}}
              >
              {'Inicia sesion'}
              </Button>
            </div>
        </InformationSide>
      </div>
    </>
  );
};

export default registerContent;
