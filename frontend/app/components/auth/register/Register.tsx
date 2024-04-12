'use client';
import { useFormik } from 'formik';
import * as Yup from "yup";
export default function Register() {
  // Pass the useFormik() hook initial form values and a submit function that will
  // be called when the form is submitted
    const formik = useFormik({
      initialValues: {
        username: '',
        email: '',
        password: ''
      },
      validationSchema: Yup.object({
        username: Yup.string()
          .required("Debes completar este campo")
          .max(8, "Máximo 8 caracteres"),
        email: Yup.string()
          .required("Debes completar este campo")
          .email("El formato no coincide con un email")
          .max(30, "Máximo 30 caracteres"),
      
        password: Yup.string()
          .required("Debes completar este campo")
          .max(15, "Máximo 15 caracteres")
          .min(8, "Al menos 8 caracteres")
      }),
      onSubmit: values => {
        alert(JSON.stringify(values, null, 2));
      },
    });
  return (
    <div className='flex flex-col justify-center items-center outline mt-10'>
      <h2 className='m-5 text-[32px] font-bold'>Registrarme</h2>
      <p>------------------------------------------------------</p>
      <form onSubmit={formik.handleSubmit}>
        <div className='flex flex-col gap-1'>
          <label htmlFor="username">Username: </label>
          <input
            className='polygon bg-transparent border-1 border-white focus:border-blue-500 '
            id="username"
            type="text"
            {...formik.getFieldProps('username')}
          />
          {formik.touched.username && formik.errors.username ? (
         <div>{formik.errors.username}</div>
       ) : null}
        </div>
        {/*<div>
          <label htmlFor="email">Email: </label>
          <input
            id="email"
            name="email"
            type="email"
            onChange={formik.handleChange}
            value={formik.values.email}
          />
          <ErrorMessage name="userEmail">
                  {errorMsg => (
                    <p className="absolute -bottom-4 left-[8%] text-[12px] text-center text-errorMsg font-josefin sm:text-[12px]">
                      {errorMsg}
                    </p>
                  )}
                </ErrorMessage>
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            id="password"
            name="password"
            type="password"
            onChange={formik.handleChange}
            value={formik.values.password}
          />
                </div>*/}

        <button type="submit">Submit</button>
      </form>
      
    </div>
  );
}
