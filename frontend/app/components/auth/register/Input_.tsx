
import { Field } from 'formik';
import React from 'react';
import { InputProps } from '../../../models/user';

const Input: React.FC<InputProps> = ({name, placeholder, type }) => (
  <Field id={name} name={name} placeholder={placeholder} type={type} />
);

export default Input;
