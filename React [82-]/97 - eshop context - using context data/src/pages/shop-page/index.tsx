import * as React from 'react';
import { Box } from '@mui/material';

import ApplicationBar from './components/application-bar';
import SideBar from './components/side-bar';
import MainSection from './components/main-section';
import { DrawerProvider } from './contexts/drawer-context';
import { ShopContextProvider } from './contexts/shop-context';

const ShopPage: React.FC = () => (
  <ShopContextProvider>
    <DrawerProvider>
      <Box sx={{ display: 'flex' }}>
        <ApplicationBar />
        <SideBar />
        <MainSection />
      </Box>
    </DrawerProvider>
  </ShopContextProvider>
);

export default ShopPage;
