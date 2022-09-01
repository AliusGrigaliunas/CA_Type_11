import React from 'react'
import InfoIcon from './icons/info-icon';
import classes from './side-box-info.module.scss';

const SideBoxInfo: React.FC = () => (
  <div className={classes.sideBoxInfo}>
    <InfoIcon />
    <p>Info About the pen</p>
  </div>
)

export default SideBoxInfo