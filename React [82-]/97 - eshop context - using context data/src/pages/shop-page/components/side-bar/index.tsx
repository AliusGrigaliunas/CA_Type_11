import React from 'react';
import { IconButton, Box } from '@mui/material';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';

import ShopContext from 'pages/shop-page/contexts/shop-context';
import SideBarContainer from './side-bar-container';
import DrawerHeader from '../drawer-header';
// import SideBarItem, { SideBarItemProps } from './side-bar-item';
import DrawerContext from '../../contexts/drawer-context';

const SideBar: React.FC = () => {
  const { open, closeDrawer } = React.useContext(DrawerContext);
  const { filters } = React.useContext(ShopContext);

  return (
    <SideBarContainer variant="permanent" open={open}>
      <DrawerHeader>
        <IconButton onClick={closeDrawer}>
          <ChevronLeftIcon />
        </IconButton>
      </DrawerHeader>
      <Box component="pre">{JSON.stringify(filters, null, 4)}</Box>
    </SideBarContainer>
  );
};

export default SideBar;
