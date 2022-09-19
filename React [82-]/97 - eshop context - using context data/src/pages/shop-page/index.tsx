import * as React from 'react';
import { Box } from '@mui/material';

import ApplicationBar from './components/application-bar';
import SideBar from './components/side-bar';
import MainSection from './components/main-section';
import { DrawerProvider } from './contexts/drawer-context';

const ShopPage: React.FC = () => (
  <DrawerProvider>
    <Box sx={{ display: 'flex' }}>
      <ApplicationBar />
      <SideBar />
      <MainSection />
    </Box>
  </DrawerProvider>
);

export default ShopPage;
