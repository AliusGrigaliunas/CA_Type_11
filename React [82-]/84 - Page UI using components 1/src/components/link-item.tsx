import React from 'react'
import Link from './link';
import classes from './link-item.module.scss';

type LinkItemProps = {
  children: React.ReactNode,
  href: string,
}

const LinkItem: React.FC<LinkItemProps> = ({ href, children }) => (
  <Link href={href} target="blank" className={classes.linkItem}>
    {children}
  </Link>

)

export default LinkItem