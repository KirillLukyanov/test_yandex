import React from 'react';
import { ButtonProps } from './model/types/ButtonProps';
import s from './Button.module.css';

export const Button = (props: ButtonProps) => {
  const { children, ...otherProps } = props;
  return (
    <button
      className={s.button}
      type="button"
      {...otherProps}
    >
      {children}
    </button>
  );
};
