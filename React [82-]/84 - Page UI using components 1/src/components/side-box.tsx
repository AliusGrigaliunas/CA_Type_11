import React from 'react'
import CloseIcon from './icons/close-icon';
import EyeIcon from './icons/eye-icon';
import InfoIcon from './icons/info-icon';
import Link from './link';

const SideBox = () => {
  return (
    <div id="webCifar-sidebox">
      <div id="webCifar" >
        <h2 className="logo">Web Cifar</h2>
        <p className="author">Coded By <span>Shaif Arfan</span></p>
        <div className="items">
          <Link href="https://www.youtube.com/channel/UCdxaLo9ALJgXgOUDURRPGiQ">
            <EyeIcon />
            <p>Watch how we made this.</p>
          </Link>
          <Link href="https://webcifar.com">
            <p>https://webcifar.com</p>
          </Link>
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