import React from 'react';
import { Box, Typography } from '@mui/material';
import CupService from 'services/cup-service';
import DrawerHeader from '../drawer-header';

const MainSection = () => {
  const [cups, setCups] = React.useState<Cup[]>([]);

  React.useEffect(() => {
    (async () => {
      const fetchedCups = await CupService.fetchMany();
      setCups(fetchedCups);
    })();
  }, []);

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
