import React from 'react';
import {
  Toolbar,
  Box,
  AppBar,
} from '@mui/material';
import { NavLink } from 'react-router-dom';

const ApplicationBar: React.FC = () => (
  <AppBar position="fixed">
    <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
      <Box sx={{ display: 'flex', gap: 2 }}>
        <NavLink to="/">Pagrindinis</NavLink>
      </Box>
      <Box sx={{ display: 'flex', gap: 2 }}>
        <NavLink to="/login">Prisijungimas</NavLink>
        <NavLink to="/register">Registracija</NavLink>
      </Box>

    </Toolbar>
  </AppBar>
);

export default ApplicationBar;
