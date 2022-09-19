import React from 'react';
import {
  Toolbar,
  Typography,
} from '@mui/material';
import ApplicationBarContainer from './application-bar-container';
import DrawerContext from '../../contexts/drawer-context';

const ApplicationBar: React.FC = () => {
  const { open } = React.useContext(DrawerContext);

  return (
    <ApplicationBarContainer position="fixed" open={open}>
      <Toolbar>
        <Typography variant="h6" noWrap component="div">
          Mini variant drawer
        </Typography>
      </Toolbar>
    </ApplicationBarContainer>
  );
};

export default ApplicationBar;
