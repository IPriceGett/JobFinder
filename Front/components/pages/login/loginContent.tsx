import Header from "components/shared/header";
import InformationSide from "./informationSide";
import InputSide from "./inputSide";
import TextInput from "components/generic/textInput";
import useLogin from "hooks/login";
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from "react-hook-form";
import Button from "components/generic/button";
import { Fragment } from "react";

const loginContent = (): JSX.Element => {
  const { handleConnect, schema, loading } = useLogin()
  const { handleSubmit, control, formState } = useForm({
    resolver: yupResolver(schema),
    mode: 'onChange',
    defaultValues: { email: '', password: '' },
  })

  const isFormValid = formState.isValid

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
      placeholder={''}
      maxLength={16}
      control={control}
    />
  )
  const inputs = {
    email: emailInput,
    password: passInput
  }
  return (
    <>
      <Header></Header>
      <div className="w-full flex flex-col-reverse md:flex-row">
        <InformationSide
          title="No tienes cuenta?"
          desc="bla bla bla"
        >
            <div className="hidden lg:block">
              <Button
                appearance="gray"
                size="medium"
                disabled={false}
                block
                onClick={() => {}}
                className="mx-16"

              >
                {'Registrarse'}
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
              {'Registrarse'}
              </Button>
            </div>
        </InformationSide>
        <InputSide title="Inicia Sesion">
          <form onSubmit={handleSubmit(handleConnect)} className="flex-1 w-[90%] flex flex-col space-y-24 items-center justify-evenly">
            <Fragment >{inputs['email']}</Fragment>
            <Fragment >{inputs['password']}</Fragment>
            <div className="hidden lg:block">
              <Button
                appearance="blue"
                size="medium"
                disabled={!isFormValid || loading}
                block
              >
                {loading ? 'Iniciando...' : 'Iniciar sesion'}
              </Button>
            </div>

            <div className="flex lg:hidden">
              <Button
                appearance="blue"
                size="medium"
                disabled={!isFormValid || loading}
                block
              >
              {loading ? 'Iniciando...' : 'Iniciar sesion'}
              </Button>
            </div>
          </form>
        </InputSide>
      </div>
    </>
  );
};

export default loginContent;
