/* eslint-disable max-len */
import * as React from 'react';
import {
  Box,
  CardMedia,
  Typography,
  Button,
  Paper,
} from '@mui/material';

const CardExample: React.FC = () => (
  <Paper
    elevation={8}
    sx={{
      display: 'flex',
      alignSelf: 'flex-start',
      borderRadius: 2,
      overflow: 'hidden',
      width: 650,
    }}
  >
    <Box sx={{ flexBasis: '50%' }}>
      <CardMedia
        image="https://unsplash.it/1200/400"
        sx={{ width: '100%', height: '100%' }}
      />
    </Box>
    <Box sx={{ flexBasis: '50%' }}>
      <Box sx={{ px: 5, py: 6, height: '100%' }}>
        <Typography variant="h5">Harvest Vases</Typography>
        <Typography variant="subtitle1">By studio and firends</Typography>

        <Typography sx={{ mt: 5, mb: 4 }}>Lorem ipsum dolor site cupiditate! Facere illo aliquam laborum quasi, ut quos optio veritatis porro reiciendis quaerat dolore nihil, vitae voluptates?</Typography>

        <Box sx={{ display: 'flex', alignItems: 'center', gap: 3 }}>
          <Typography variant="h6">78$</Typography>
          <Button
            variant="contained"
            sx={{ borderRadius: 8 }}
            size="large"
          >
            Buy now
          </Button>
        </Box>
      </Box>
    </Box>
  </Paper>
);

export default CardExample;
