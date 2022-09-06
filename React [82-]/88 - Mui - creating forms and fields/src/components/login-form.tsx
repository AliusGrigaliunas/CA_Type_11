import React from 'react';
import {
  Paper,
  Box,
  Typography,
  TextField,
  Button,
  FormControlLabel,
} from '@mui/material';
import SecurityIcon from '@mui/icons-material/Security';
import CustomSizeCheckbox from './custom-size-checkbox';

const LoginForm = () => (
  <Box sx={{
    height: '100vh',
    display: 'grid',
    placeItems: 'center',
    backgroundImage: 'url(/login-bg.png)',
    backgroundSize: 'cover',
  }}
  >
    <Paper
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: 4,
        width: 400,
        p: 4,
      }}
      elevation={10}
    >
      <SecurityIcon sx={{ fontSize: 50, alignSelf: 'center' }} color="primary" />
      <Typography component="h1" variant="h4" align="center">Prisijungimas</Typography>
      <TextField variant="filled" label="El. paštas" />
      <TextField variant="filled" label="Slaptažodis" />
      <FormControlLabel
        control={(<CustomSizeCheckbox defaultChecked />)}
        label="Įsiminti"
      />
      <Button variant="contained" sx={{ height: 60 }} size="large">Prisijungti</Button>
    </Paper>
  </Box>
);

export default LoginForm;
