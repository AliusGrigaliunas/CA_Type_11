import React from 'react'
import Link from './link';

type LinkItemProps = {
  children: React.ReactNode,
  href: string,
}

const LinkItem: React.FC<LinkItemProps> = ({ href, children }) => (
  <Link href={href} target="blank" className="item">
    {children}
  </Link>

)

export default LinkItem