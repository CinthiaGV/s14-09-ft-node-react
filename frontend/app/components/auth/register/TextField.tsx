import { ErrorMessage, useField } from 'formik';
import React from 'react';

interface TextFieldProps {
  label?: string;
  name: string;
  type?: string;
  placeholder?: string;
}

const TextField: React.FC<TextFieldProps> = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <div className="mb-2">
      {label && <label htmlFor={field.name}>{label}</label>}
      <input
        className={`form-control shadow-none ${meta.touched && meta.error && 'is-invalid'}`}
        {...field}
        {...props}
        autoComplete="off"
      />
      <ErrorMessage component="div" name={field.name} className="error" />
    </div>
  );
};

export default TextField;