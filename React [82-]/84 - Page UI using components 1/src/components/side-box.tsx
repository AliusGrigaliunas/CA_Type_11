import React from 'react'
import CloseIcon from './icons/close-icon';
import EyeIcon from './icons/eye-icon';
import InfoIcon from './icons/info-icon';

const SideBox = () => {
  return (
    <div id="webCifar-sidebox">
      <div id="webCifar">
        <h2 className="logo">Web Cifar</h2>
        <p className="author">Coded By <span>Shaif Arfan</span></p>
        <div className="items">
          <a href="https://www.youtube.com/channel/UCdxaLo9ALJgXgOUDURRPGiQ" target="blank" className="item youtubeLink">
            <EyeIcon />
            <p>Watch how we made this.</p>
          </a>
          <a href="https://webcifar.com" target="blank" className="item">
            <p>https://webcifar.com</p>
          </a>
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