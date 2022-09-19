import * as React from 'react';
import { Box } from '@mui/material';

import ApplicationBar from './components/application-bar';
import SideBar from './components/side-bar';
import MainSection from './components/main-section';
import { DrawerProvider } from './contexts/drawer-context';
import { ShopContextProvider } from './contexts/shop-context';
import DrawerButton from './components/drawer-button';

const ShopPage: React.FC = () => (
  <ShopContextProvider>
    <DrawerProvider>
      <Box>
        <ApplicationBar />
        <SideBar />
        <MainSection />
        <DrawerButton />
      </Box>
    </DrawerProvider>
  </ShopContextProvider>
);

export default ShopPage;
