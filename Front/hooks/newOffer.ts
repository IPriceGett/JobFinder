import * as yup from 'yup'
import { useState } from 'react'
import { useRouter } from 'next/router'
import axios from 'axios'
import getUser from 'utils/session'


type ReturnProps = {
  handleUpload: (event: any) => Promise<null>
  loading: boolean
  schema: yup.AnyObjectSchema
}

const useNewOffer = (img: File, offerType: number): ReturnProps => {
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
    let user = getUser();
    const formData = new FormData();
    formData.append('image', img);
    formData.append('title', event.title);
    formData.append('desc', event.desc);
    formData.append('expiration', event.date);
    formData.append('type', offerType.toString());
    formData.append('owner', user.id);

    try {
      const response = await axios.post('http://localhost:5000/offer/create', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      if(response.data){
        push("/publications")
      } 
    } catch (error) {
      console.error('Error al enviar el archivo:', error);
    }
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