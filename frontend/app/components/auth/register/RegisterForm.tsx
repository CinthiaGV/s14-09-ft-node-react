'use client';
import { Button } from '@nextui-org/react';
import axios from 'axios';
import { useFormik } from 'formik';
import InputField from '../InputField';
import { validationSchema } from './validation';

export default function RegisterForm() {
  const endpoint = process.env.NEXT_PUBLIC_BACKEND_URL
  const formik = useFormik({
    initialValues: {
      username: '',
      email: '',
      password: '',
    },
    validationSchema:validationSchema ,
    onSubmit: async (values) => {
      try {
        const info = {userData: values}
      const {data}= await axios.post(`${endpoint}/users/signup`||"", info)
      console.log(data)
    } catch (error) {
        console.log('Registro no exitoso', error)
        
      }
      
    },
  });

  return (
        <form onSubmit={formik.handleSubmit} className="flex flex-col gap-4">
          <InputField
            type="text"
            label="Username:"
            id="username"
            formikProps={{ formik }}
          />
          <InputField
            type="email"
            label="Email:"
            id="email"
            formikProps={{ formik }}
          />
          <InputField
            type="password"
            label="Password:"
            id="password"
            formikProps={{ formik }}
          />
          <div>
            <a><span>¿Olvidaste tu contraseña?</span></a>
          </div>

          <Button type='submit' className="btn yellowBtn glitch w-[8rem] place-self-center">Regístrate</Button>
        </form>
  );
}
