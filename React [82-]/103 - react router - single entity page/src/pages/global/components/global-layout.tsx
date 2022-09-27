import * as React from 'react';
import { Outlet } from 'react-router-dom';
import { Box } from '@mui/material';
import ApplicationBar from './application-bar';

const GlobalLayout: React.FC = () => (
  <Box>
    <ApplicationBar />
    <Outlet />
  </Box>
);

export default GlobalLayout;
