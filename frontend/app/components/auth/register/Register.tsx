'use client'
import { useFormik } from 'formik';
import * as Yup from 'yup';
import InputField from './InputField';

export default function Register() {
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
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="flex flex-col justify-center items-center outline w-[500px] glassmorphism text-white p-10">
        <h2 className="text-2xl font-bold mb-5">Registrarme</h2>
        <form onSubmit={formik.handleSubmit} className="flex flex-col gap-4">
          <InputField type="text" label="Username:" id="username" formikProps={{ formik }} />
          <InputField type="email" label="Email:" id="email" formikProps={{ formik }} />
          <InputField type="password" label="Password:" id="password" formikProps={{ formik }} />
          <button className="yellowBtn glitch transition duration-300" type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}
