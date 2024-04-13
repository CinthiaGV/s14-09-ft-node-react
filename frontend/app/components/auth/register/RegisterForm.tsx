'use client';
import { Button } from '@nextui-org/react';
import axios from 'axios';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import InputField from './InputField';

export default function RegisterForm() {
  const endpoint = process.env.NEXT_PUBLIC_BACKEND_URL
  const formik = useFormik({
    initialValues: {
      username: '',
      email: '',
      password: '',
    },
    validationSchema: Yup.object({
      username: Yup.string()
        .required('Debes completar este campo')
        .max(8, 'Máximo 8 caracteres'),
      email: Yup.string()
        .required('Debes completar este campo')
        .email('El formato no coincide con un email')
        .max(30, 'Máximo 30 caracteres'),
      password: Yup.string()
        .required('Debes completar este campo')
        .max(15, 'Máximo 15 caracteres')
        .min(8, 'Al menos 8 caracteres'),
    }),
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
