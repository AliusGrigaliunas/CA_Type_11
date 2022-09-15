import * as React from 'react';
import { Box } from '@mui/material';

import ApplicationBar from './components/application-bar';
import SideBar from './components/side-bar';
import MainSection from './components/main-section';
import DrawerContext from './contexts/drawer-context';

const ShopPage = () => {
  const [open, setOpen] = React.useState(false);

  const drawerContextValue = React.useMemo(() => ({
    open,
    openDrawer: () => setOpen(true),
    closeDrawer: () => setOpen(false),
  }), [open]);

  return (
    <DrawerContext.Provider value={drawerContextValue}>
      <Box sx={{ display: 'flex' }}>
        <ApplicationBar />
        <SideBar />
        <MainSection />
      </Box>
    </DrawerContext.Provider>
  );
};

export default ShopPage;
