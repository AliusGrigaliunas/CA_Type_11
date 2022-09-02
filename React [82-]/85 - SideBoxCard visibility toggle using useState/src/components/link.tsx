import React from 'react'
import classes from './link.module.scss'

type LinkProps = {
  href: string,
  children: React.ReactNode,
  target?: string,
  className?: string
}

const Link: React.FC<LinkProps> = ({
  href,
  children,
  target,
  className
}) => (
  <a
    href={href}
    className={className ? [classes.link, className].join(' ') : classes.link}
    target={target}
  >
    {children}
  </a>
)


export default Link