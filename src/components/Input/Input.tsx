import React from 'react';
import { Field, ErrorMessage } from 'formik';
import style from './Input.style';

export interface InputProps {
  name: string;
  label?: string;
  type?: string;
  disabled?: boolean;
}

const Input: React.FC<InputProps> = ({
  name,
  label,
  type,
  disabled,
}) => {

  return (
    <div css={style}>
      {label && <label htmlFor={name}>{label}</label>}
      <Field type={type} name={name} disabled={disabled} />
      <div className="error"><ErrorMessage name={name} /></div>
    </div>
  )
};

export default Input;