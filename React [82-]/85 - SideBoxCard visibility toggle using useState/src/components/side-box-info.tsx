import React from 'react'
import InfoIcon from './icons/info-icon';
import classes from './side-box-info.module.scss';

type SideBoxInfoProps = {
  onClick: VoidFunction
}

const SideBoxInfo: React.FC<SideBoxInfoProps> = ({ onClick }) => (
  <div className={classes.sideBoxInfo} onClick={onClick}>
    <InfoIcon />
    <p>Info About the pen</p>
  </div>
)

export default SideBoxInfo