import React from 'react'
import SideBoxCard from './side-box-card';
import SideBoxInfo from './side-box-info';
import classes from './side-box.module.scss';

const SideBox: React.FC = () => (
  <div className={classes.sideBox}>
    <SideBoxCard />
    <SideBoxInfo />
  </div>
)

export default SideBox