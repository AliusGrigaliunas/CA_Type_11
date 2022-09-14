import * as React from 'react';
import { Box } from '@mui/material';

import ApplicationBar from './components/application-bar';
import SideBar from './components/side-bar';
import MainSection from './components/main-section';

const drawerWidth = 240;

const ShopPage = () => {
  const [open, setOpen] = React.useState(false);

  const openDrawer = () => setOpen(true);
  const closeDrawer = () => setOpen(false);

  return (
    <Box sx={{ display: 'flex' }}>
      <ApplicationBar
        ApplicationBarContainerProps={{ drawerWidth }}
        open={open}
        openDrawer={openDrawer}
      />
      <SideBar
        SideBarContainerProps={{ drawerWidth }}
        open={open}
        closeDrawer={closeDrawer}
      />
      <MainSection />
    </Box>
  );
};

export default ShopPage;
