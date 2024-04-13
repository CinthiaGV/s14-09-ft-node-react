'use client';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import GoogleIcon from '@mui/icons-material/Google';
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
    <div className="flex justify-center items-center h-screen w-[628px]">
      <div className="flex flex-col justify-center items-center text-white">
        <h2 className="text-2xl font-bold">Registrarme</h2>
        <hr className="w-full border-b-1 overflow-visible" />
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
          <button
            className="yellowBtn glitch transition duration-300"
            type="submit"
          >
            Registrarme
          </button>
        </form>
        <div className="separator">
          <div></div>
          <span>O regístrate con</span>
          <div></div>
        </div>
        <div className="inline">
        <button><GoogleIcon/></button>
        <button><FacebookRoundedIcon/></button>
        </div>
      </div>
    </div>
  );
}
