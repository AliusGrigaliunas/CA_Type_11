import * as React from 'react';
import {
  IconButton,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import DrawerContext from '../contexts/drawer-context';

const DrawerButton: React.FC = () => {
  const { open, closeDrawer, openDrawer } = React.useContext(DrawerContext);

  return (
    <IconButton
      color="inherit"
      aria-label="open drawer"
      onClick={openDrawer}
      size="large"
      sx={{
        position: 'fixed',
        bottom: 15,
        right: 15,
        bgcolor: 'primary.main',
        borderRadius: 1,
        WebkitBackfaceVisibility: 'hidden',
        ':hover': {
          color: 'common.white',
          bgcolor: 'primary.dark',
        },
        zIndex: 'drawerButton',
      }}
    >
      <MenuIcon />
    </IconButton>
  );
};

export default DrawerButton;
