import * as yup from 'yup'
import { useState } from 'react'
import { useRouter } from 'next/router'


type ReturnProps = {
  handleRegister: (event: any) => Promise<null>
  loading: boolean
  schema: yup.AnyObjectSchema
}

const useRegister = (): ReturnProps => {
  const [loading, setLoading] = useState(false)
  const { push } = useRouter()

  const handleRegister = async (event: any) => {
    setLoading(true)
    console.log(event.email)
    console.log(event.password)
    await new Promise((resolve) => {
      setTimeout(() => {
        resolve(true)
      }, 1000)
    })

    // push('/connection/connect?')
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
  .matches(
    /\A(\+?56)?(\s?)(0?9)(\s?)[9876543]\d{7}\z/,
    'Seguro que ese es tu telefono?'
  )
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