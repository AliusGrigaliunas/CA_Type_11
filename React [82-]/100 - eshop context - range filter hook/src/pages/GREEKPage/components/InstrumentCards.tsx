import React from 'react';
import { Box, Grid } from '@mui/material';
import InstrumentContext from '../context/instrumentContext';

const InstrumentCards:React.FC = () => {
    const { instruments } = React.useContext(InstrumentContext);

    return (
      <Box>
        <Grid>
          <Box>
            {JSON.stringify(instruments, null, 2)}
          </Box>
        </Grid>
      </Box>
  );
};

export default InstrumentCards;
