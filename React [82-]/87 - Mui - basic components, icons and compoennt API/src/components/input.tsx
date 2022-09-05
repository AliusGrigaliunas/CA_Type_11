import React from 'react';
import classes from './input.module.scss';

type InputProps = JSX.IntrinsicElements['input'];

const Input: React.FC<InputProps> = ({ className, ...props }) => (
  <input
    className={classes.input + (className ? ` ${className}` : '')}
    {...props}
  />
);

export default Input;
