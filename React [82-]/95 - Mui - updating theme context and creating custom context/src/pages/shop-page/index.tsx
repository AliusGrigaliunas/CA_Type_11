import * as React from 'react';
import { Box } from '@mui/material';

import ApplicationBar from './components/application-bar';
import SideBar from './components/side-bar';
import MainSection from './components/main-section';

const ShopPage = () => {
  const [open, setOpen] = React.useState(false);

  const openDrawer = () => setOpen(true);
  const closeDrawer = () => setOpen(false);

  return (
    <Box sx={{ display: 'flex' }}>
      <ApplicationBar
        open={open}
        openDrawer={openDrawer}
      />
      <SideBar
        open={open}
        closeDrawer={closeDrawer}
      />
      <MainSection />
    </Box>
  );
};

export default ShopPage;
