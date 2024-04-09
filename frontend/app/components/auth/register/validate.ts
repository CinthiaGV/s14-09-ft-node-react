import * as Yup from "yup";

export const validate = Yup.object({
  firstName: Yup.string().required("Firstname Required!"),
  lastName: Yup.string(),
  email: Yup.string().email("Email is invalid!").required("Email Required!"),
  password: Yup.string()
    .min(4, "Password must be minimum 4 digits!")
    .required("Password Required!"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password")], "Password must match!")
    .required("Confirm password is reqired!"),
  age: Yup.number()
    .min(14, "Age must be minimum 14 Years!")
    .required("Age must be required!"),
});