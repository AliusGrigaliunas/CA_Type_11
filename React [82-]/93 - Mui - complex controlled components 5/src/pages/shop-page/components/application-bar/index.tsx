import React from 'react';
import {
  Toolbar,
  Typography,
  IconButton,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import ApplicationBarContainer, { type ApplicationBarContainerProps } from './application-bar-container';

type ApplicationBarProps = {
  ApplicationBarContainerProps: Omit<ApplicationBarContainerProps, 'fixed' | 'open'>,
  open: boolean,
  openDrawer: VoidFunction,
};

const ApplicationBar: React.FC<ApplicationBarProps> = ({
  ApplicationBarContainerProps,
  open,
  openDrawer,
}) => (
  <ApplicationBarContainer position="fixed" open={open} {...ApplicationBarContainerProps}>
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

export default ApplicationBar;
