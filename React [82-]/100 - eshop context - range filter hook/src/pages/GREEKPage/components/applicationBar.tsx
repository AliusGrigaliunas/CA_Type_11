import React from 'react';
import {
 AppBar, CssBaseline, IconButton, Toolbar, Typography, Button,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

const ApplicationBar:React.FC = () => (
  <AppBar position="static" color="transparent">
    <CssBaseline />
    <Toolbar>
      <IconButton
        size="large"
        edge="start"
        color="warning"
        aria-label="menu"
        sx={{ mr: 2 }}
      >
        <MenuIcon />
      </IconButton>
      <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
        News
      </Typography>
      <Button color="inherit">Login</Button>
    </Toolbar>
  </AppBar>
  );

export default ApplicationBar;
