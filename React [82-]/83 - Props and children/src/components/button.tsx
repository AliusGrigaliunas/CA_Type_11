import * as React from 'react';
import classes from './button.module.scss';

type ButtonProps = {
  children: React.ReactNode,
  color?: 'primary' | 'secondary' | 'error' | 'warning',
}

const Button: React.FC<ButtonProps> = ({
  color = 'primary',
  children,
}) => {

  return (
    <button className={classes[color]}>{children}</button>
  );
};

export default Button;