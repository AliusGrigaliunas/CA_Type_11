import React from 'react';
import { Box, Typography } from '@mui/material';
import ShopContext from 'pages/shop-page/contexts/shop-context';
import DrawerHeader from '../drawer-header';

const MainSection = () => {
  const { cups } = React.useContext(ShopContext);

  return (
    <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
      <DrawerHeader />
      <Typography component="pre">
        {JSON.stringify(cups, null, 4)}
      </Typography>
    </Box>
  );
};

export default MainSection;
