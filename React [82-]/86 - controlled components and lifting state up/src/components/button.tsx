import React from 'react';
import classes from './button.module.scss';

type ButtonProps = JSX.IntrinsicElements['button'];

const Button: React.FC<ButtonProps> = ({
  children,
  className,
  type = 'button',
  ...props
}) => (
  <button
    className={classes.button + (className ? ` ${className}` : '')}
    type={type}
    {...props}
  >
    {children}
  </button>
);

export default Button;
