import React from 'react'
import SideBoxCard from './side-box-card';
import SideBoxInfo from './side-box-info';
import classes from './side-box.module.scss';

const SideBox: React.FC = () => {
  console.log('Sukurtas SideBox komponentas');

  return (
    <div className={classes.sideBox}>
      <SideBoxCard />
      <SideBoxInfo />
    </div>
  )
}

export default SideBox