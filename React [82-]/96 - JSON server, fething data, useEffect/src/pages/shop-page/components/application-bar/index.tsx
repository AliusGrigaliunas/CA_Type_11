import React from 'react';
import {
  Toolbar,
  Typography,
  IconButton,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import ApplicationBarContainer from './application-bar-container';
import DrawerContext from '../../contexts/drawer-context';

const ApplicationBar: React.FC = () => {
  const { open, openDrawer } = React.useContext(DrawerContext);

  return (
    <ApplicationBarContainer position="fixed" open={open}>
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={openDrawer}
          edge="start"
          sx={{
            marginRight: 5,
            ...(open && { display: 'none' }),
          }}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" noWrap component="div">
          Mini variant drawer
        </Typography>
      </Toolbar>
    </ApplicationBarContainer>
  );
};

export default ApplicationBar;
