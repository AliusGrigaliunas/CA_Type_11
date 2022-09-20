import React from 'react';
import {
  Box, Typography, Grid, Divider, Paper,
} from '@mui/material';
import ShopContext from 'pages/shop-page/contexts/shop-context';
import DrawerHeader from '../drawer-header';

type MainSectionProps = {
  isExtendedLayout: boolean
};

const MainSection: React.FC<MainSectionProps> = ({ isExtendedLayout }) => {
  const { cups } = React.useContext(ShopContext);

  return (
    <Box
      component="main"
      sx={(theme) => ({
        flexGrow: 1,
        p: 3,
        ...(isExtendedLayout && {
          ml: `${theme.common.drawerWidth.md}px`,
        }),
      })}
    >
      <DrawerHeader />
      <Typography>Visos prekės</Typography>
      <Divider sx={{ my: 2 }} />
      <Grid container spacing={3} sx={{ alignItem: 'stretch' }}>
        {cups.map((cup) => (
          <Grid key={cup.id} item xs={3}>
            <Paper elevation={3} sx={{ p: 3 }}>
              {JSON.stringify(cup, null, 4)}
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default MainSection;
