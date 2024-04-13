'use client'
import { useFormik } from 'formik';
import * as Yup from 'yup';
import InputField from './InputField';

export default function Register() {
  // Pass the useFormik() hook initial form values and a submit function that will
  // be called when the form is submitted
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
    <div className="flex flex-col justify-center items-center outline mt-10 w-[500px] glassmorphism text-white">
      <h2 className="m-5 text-[32px] font-bold">Registrarme</h2>
      <p>------------------------------------------------------</p>
      <form onSubmit={formik.handleSubmit}>
      <InputField label="Username:" id="username" formikProps={{ formik }} />
      <InputField label="Email:" id="email" formikProps={{ formik }} />
      <InputField label="Password:" id="password" formikProps={{ formik }} />
        
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
