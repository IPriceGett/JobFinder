import * as yup from 'yup'
import { useState } from 'react'
import { useRouter } from 'next/router'
import axios from 'axios'

type ReturnProps = {
  handleConnect: (event: any) => Promise<null>
  loading: boolean
  schema: yup.AnyObjectSchema
}

const useLogin = (): ReturnProps => {
  const [loading, setLoading] = useState(false)
  const { push } = useRouter()

  const handleConnect = async (event: any) => {
    setLoading(true)
    
    await new Promise((resolve) => {
      setTimeout(() => {
        resolve(true)
      }, 1000)
    })

    try {
      const response = await axios.post('http://localhost:5000/user/login', {"pass":event.password, "email":event.email});
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

  yupShape['password'] = yup.string().required('Este campo es requerido').trim()

  const schema = yup.object().shape(yupShape)

  return { handleConnect, loading, schema }
}

export default useLogin