import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { useState } from 'react';

interface IInputField {
  label: string;
  id: string;
  type: string;
  formikProps: any;
}

export default function InputField({ label, id, type, formikProps }: IInputField) {
  const { formik } = formikProps;
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  return (
    <div className="relative flex flex-col gap-1">
      <label htmlFor={id}>{label}</label>
      <div className="p-[0.0625rem] polygon polygon-border">
        <div className="polygon glassmorphism">
          <div className="absolute inset-y-1 left-0 pl-3 flex items-center pointer-events-none">
            {id === 'username' ? (
              <PersonOutlineOutlinedIcon />
            ) : id === 'email' ? (
              <EmailOutlinedIcon />
            ) : id === 'password' ? (
              <LockOutlinedIcon />
            ) : null}
          </div>
          <input
            className="polygon bg-transparent pl-2 py-2 border-none w-64 ml-10"
            id={id}
            type={showPassword ? 'text' : type} // Toggle between 'text' and original 'type' for password field
            {...formik.getFieldProps(id)}
          />
          {id === 'password' && ( // Show password toggle button only for password field
            <div className="absolute inset-y-1 right-0 pr-3 flex items-center">
              {showPassword ? (
                <VisibilityOffIcon onClick={togglePasswordVisibility} />
              ) : (
                <VisibilityIcon onClick={togglePasswordVisibility} />
              )}
            </div>
          )}
        </div>
      </div>
      <div>
        {formik.touched[id] && formik.errors[id] ? (
          <span className="text-red-500">{formik.errors[id]}</span>
        ) : (
          <span>&nbsp;</span>
        )}
      </div>
    </div>
  );
}
