import * as React from 'react';
import classes from './text-field.module.css';

const TextField: React.FC = () => {

  return (
    <div className={classes.container}>
      <label htmlFor=""></label>
      <input type="text" />
    </div>
  );
};

export default TextField;