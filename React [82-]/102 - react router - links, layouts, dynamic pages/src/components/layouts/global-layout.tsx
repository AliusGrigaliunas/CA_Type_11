import * as React from 'react';
import { Outlet } from 'react-router-dom';
import { Box } from '@mui/material';
import ApplicationBar from 'components/partials/application-bar';

const GlobalLayout: React.FC = () => (
  <Box>
    <ApplicationBar />
    <Outlet />
  </Box>
);

export default GlobalLayout;
