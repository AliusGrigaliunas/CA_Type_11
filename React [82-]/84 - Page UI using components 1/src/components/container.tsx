import React from 'react'
import classes from './container.module.scss';

type ContainerProps = {
  children: React.ReactNode
}

const Container: React.FC<ContainerProps> = ({ children }) => {
  return (
    <div className={classes.container}>{children}</div>
  )
}

export default Container