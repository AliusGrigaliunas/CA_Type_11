import React from 'react';
import { Box } from '@mui/material';
import { InstrumentContextProvider } from './context/instrumentContext';
import ApplicationBar from './components/applicationBar';
import InstrumentCards from './components/InstrumentCards';

const GreekPage:React.FC = () => (
  <InstrumentContextProvider>
    <Box>
      <ApplicationBar />
    </Box>
    <InstrumentCards />
  </InstrumentContextProvider>
  );

export default GreekPage;
