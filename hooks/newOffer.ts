import * as yup from 'yup'
import { useState } from 'react'
import { useRouter } from 'next/router'


type ReturnProps = {
  handleUpload: (event: any) => Promise<null>
  loading: boolean
  schema: yup.AnyObjectSchema
}

const useNewOffer = (): ReturnProps => {
  const [loading, setLoading] = useState(false)
  const { push } = useRouter()

  const handleUpload = async (event: any) => {
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

  yupShape['title'] = yup
  .string()
  .required('Este campo es requerido')
  .trim()

  yupShape['desc'] = yup
  .string()
  .required('Este campo es requerido')
  .trim()

  yupShape['date'] = yup
  .date()
  .required('Este campo es requerido')

  const schema = yup.object().shape(yupShape)

  return { handleUpload, loading, schema }
}

export default useNewOffer