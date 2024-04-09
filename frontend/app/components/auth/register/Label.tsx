import React from 'react';
import { LabelProps } from '../../../models/user';

const Label: React.FC<LabelProps> = ({ htmlFor, children }) => (
  <label htmlFor={htmlFor}>{children}</label>
);

export default Label;
