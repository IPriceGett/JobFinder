import * as yup from 'yup'
import { Dispatch, SetStateAction, useState } from 'react'
import { useRouter } from 'next/router'
import axios from 'axios'


type ReturnProps = {
  handleRegister: (event:any) => Promise<null>
  loading: boolean
  schema: yup.AnyObjectSchema
}

const useRegister = (img: File): ReturnProps => {
  const [loading, setLoading] = useState(false)
  const { push } = useRouter()


  const handleRegister = async (event:any) => {
    setLoading(true)
    await new Promise((resolve) => {
      setTimeout(() => {
        resolve(true)
      }, 1000)
    })
    const formData = new FormData();
    formData.append('image', img);
    formData.append('name', event.name);
    formData.append('phone', event.phone);
    formData.append('email', event.email);
    formData.append('pass', event.password);
    formData.append('ocupation', event.ocu);
    formData.append('organization', event.org);

    try {
      const response = await axios.post('http://localhost:5000/user/register', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      if(response.data){
        const d = new Date();
        d.setTime(d.getTime() + (1*24*60*60*1000));
        let expires = "expires="+ d.toUTCString();
        document.cookie = "user=" + JSON.stringify(response.data) + ";" + expires + ";path=/";
        push("/offers/offers")
      } 
    } catch (error) {
      console.error('Error al enviar el archivo:', error);
    }

    return null
  }

  const yupShape: Record<string, yup.AnySchema> = {}

  yupShape['email'] = yup
  .string()
  .email('Seguro que ese es tu email?')
  .required('Este campo es requerido')
  .trim()

  yupShape['name'] = yup
  .string()
  .required('Este campo es requerido')
  .trim()

  yupShape['phone'] = yup
  .string()
  .required('Este campo es requerido')
  .trim()

  yupShape['org'] = yup
  .string()
  .required('Este campo es requerido')
  .trim()

  yupShape['ocu'] = yup
  .string()
  .required('Este campo es requerido')
  .trim()

  yupShape['password'] = yup.string().required('Este campo es requerido').trim()

  const schema = yup.object().shape(yupShape)

  return { handleRegister, loading, schema }
}

export default useRegister