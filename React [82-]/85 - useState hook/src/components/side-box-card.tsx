import React from 'react'
import CloseIcon from './icons/close-icon';
import EyeIcon from './icons/eye-icon';
import LinkItem from './link-item';
import classes from './side-box-card.module.scss';

const SideBoxCard: React.FC = () => (
  <div className={classes.sideBoxCard + ' ' + classes.active}>
    <h2 className={classes.logo}>Web Cifar</h2>
    <p className={classes.author}>Coded By <span>Shaif Arfan</span></p>
    <div className={classes.linkItemsContainer}>
      <LinkItem href="https://www.youtube.com/channel/UCdxaLo9ALJgXgOUDURRPGiQ">
        <EyeIcon />
        <p>Watch how we made this.</p>
      </LinkItem>
      <LinkItem href="https://webcifar.com">
        <p>https://webcifar.com</p>
      </LinkItem>
    </div>
    <div className={classes.close}>
      <CloseIcon />
    </div>
  </div>
)


export default SideBoxCard