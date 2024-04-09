// components/CheckboxField.tsx

import React, { ReactNode } from 'react';

interface CheckboxFieldProps {
  id: string
  children:ReactNode
}

const CheckboxField: React.FC<CheckboxFieldProps> = ({ id, children }) => {
  return (
    <div className="flex items-start">
      <div className="flex items-center h-5">
        <input
          id={id}
          type="checkbox"
          className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
          required
        />
      </div>
      <div className="ml-3 text-sm">
        <label htmlFor={id} className="font-light text-gray-500 dark:text-gray-300">
          {children}
        </label>
      </div>
    </div>
  );
};

export default CheckboxField;
