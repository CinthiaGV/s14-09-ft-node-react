'use client'
import { Form, Formik } from "formik";
import 'react-app-polyfill/ie11';

import InputField from "./InputField";
import { validate } from "./validate";

const FormikRegister = () => {
  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    age: "",
    confirmPassword: "",
  };
  return (
    <section /*className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700"*/>
      <h1>Signup</h1>
    <div>
      <Formik
        initialValues={initialValues}
        validationSchema={validate}
        onSubmit={(values) => {
          alert(JSON.stringify(values, null, 2));
        }}
      >
        {(formik) => (
          <div>
            <Form className="form p-3">
              <InputField name="Email" type="text" placeholder="boludo"/>
              {/*<TextField
                type="text"
                label="Firstname"
                name="firstName"
                placeholder="Lorem"
              />
              <TextField
                type="text"
                name="lastName"
                label="Lastname"
                placeholder="Ipsum"
              />
              <TextField
                type="email"
                name="email"
                label="Email"
                placeholder="loremipsum@gmail.com"
              />
              <TextField
                type="text"
                name="password"
                label="Password"
                placeholder="qwert@123"
        />*/}
              {/*<div className="mb-2">
                <label htmlFor="confirmPassword">Confirm Password</label>
                <input
                  id="confirmPassword"
                  className={`form-control shadow-none ${
                    formik.touched.confirmPassword &&
                    formik.errors.confirmPassword &&
                    "is-invalid"
                  }`}
                  type="text"
                  name="confirmPassword"
                  placeholder="confirm password..."
                  {...formik.getFieldProps("confirmPassword")}
                />
                <ErrorMessage
                  component="div"
                  name="confirmPassword"
                  className="error"
                />
              </div>*/}
              {/*<TextField
                type="number"
                name="age"
                label="Age"
                placeholder="19"
            />*/}
              {/*<button className="btn btn-dark m-3" type="submit">
                Register
              </button>
              <button className="btn btn-primary m-3" type="reset">
                Reset
          </button>*/}
            </Form>
          </div>
        )}
      </Formik>
    </div>
    </section>
  );
};
 
export default FormikRegister