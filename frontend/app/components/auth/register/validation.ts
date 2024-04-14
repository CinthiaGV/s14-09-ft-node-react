import * as Yup from 'yup';

export const initialValues = {
  username: '',
  email: '',
  password: '',
}

export const validationSchema = Yup.object({
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
})