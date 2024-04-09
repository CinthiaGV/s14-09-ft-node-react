// components/InputField.tsx
import React from "react";
import { InputFieldProps } from "../../../models/user";
import Input from "./Input_";
import Label from './Label';

/*interface InputFieldProps {
  label: string;
  type: string;
  id: string;
  placeholder: string;
  value: any,
  setValue: ()=>void
}*/


const InputField: React.FC<InputFieldProps> = ({
  name,
  placeholder,
  type,
}) => {
  const labelFor = name[0].toUpperCase()+name.slice(1)
  return (
  <div>
    <Label htmlFor={labelFor}>{labelFor}</Label>
    <Input name={name} placeholder={placeholder} type={type} />
  </div>
);}


{/*const InputField: React.FC<InputFieldProps> = ({ label, type, id, placeholder, value, setValue }) => {
  return (
    <div>
      <label htmlFor={id} className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
        {label}
      </label>
      <input
        type={type}
        id={id}
        placeholder={placeholder}
        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        required
      />

    </div>
  );
};*/}

export default InputField;
