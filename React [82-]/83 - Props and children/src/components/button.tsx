import * as React from 'react';
import classes from './button.module.css';

type ButtonProps = {
  children: React.ReactNode
}

const Button: React.FC<ButtonProps> = ({ children }) => {

  return (
    <button className={classes.container}>{children}</button>
  );
};

export default Button;