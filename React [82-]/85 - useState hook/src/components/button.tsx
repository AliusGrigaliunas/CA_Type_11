import React from 'react'
import classes from './button.module.scss';
import Link from './link';

type ButtonProps = {
  children: React.ReactNode,
  href?: string
}

const Button: React.FC<ButtonProps> = ({ href, children }) => {
  if (href) {
    return <Link href={href} className={classes.button}>{children}</Link>
  }

  return (
    <button className={classes.button}>{children}</button>
  )
}

export default Button