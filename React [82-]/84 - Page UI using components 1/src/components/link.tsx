import React from 'react'

type LinkProps = {
  children: React.ReactNode,
  href: string,
}

const Link: React.FC<LinkProps> = ({ href, children }) => (
  <a href={href} target="blank" className="item">
    {children}
  </a>
)

export default Link