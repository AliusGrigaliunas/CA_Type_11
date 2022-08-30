import * as React from 'react';
import classes from './text-field.module.scss';

const TextField: React.FC = () => {

  return (
    <div className={classes.container}>
      <label htmlFor=""></label>
      <input type="text" />
    </div>
  );
};

export default TextField;