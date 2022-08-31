import React from 'react'
import CloseIcon from './icons/close-icon';
import EyeIcon from './icons/eye-icon';
import InfoIcon from './icons/info-icon';
import LinkItem from './link-item';

const SideBox = () => {
  return (
    <div id="webCifar-sidebox">
      <div id="webCifar" className="active">
        <h2 className="logo">Web Cifar</h2>
        <p className="author">Coded By <span>Shaif Arfan</span></p>
        <div className="items">
          <LinkItem href="https://www.youtube.com/channel/UCdxaLo9ALJgXgOUDURRPGiQ">
            <EyeIcon />
            <p>Watch how we made this.</p>
          </LinkItem>
          <LinkItem href="https://webcifar.com">
            <p>https://webcifar.com</p>
          </LinkItem>
        </div>
        <div className="close">
          <CloseIcon />
        </div>
      </div>
      <div id="webCifar-icon">
        <InfoIcon />
        <p>Info About the pen</p>
      </div>
    </div>
  )
}

export default SideBox