import * as yup from 'yup'
import { useState } from 'react'
import { useRouter } from 'next/router'
import Users from '../data/user.json'

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
    const user = Users.filter(item => item.email === event.email && item.pass === event.password)[0]
    console.log(user)
    await new Promise((resolve) => {
      setTimeout(() => {
        resolve(true)
      }, 1000)
    })
    if(user){
      localStorage.setItem("user",JSON.stringify(user))
      push('/offers/offers')
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