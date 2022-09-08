import * as React from 'react';
import {
  Paper,
  Box,
  Typography,
  TextField,
  Button,
  FormControlLabel,
} from '@mui/material';
import SecurityIcon from '@mui/icons-material/Security';
import CustomSizeCheckbox from '../components/form-controls/custom-size-checkbox';

const LoginPage: React.FC = () => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [remember, setRemember] = React.useState(true);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log('Siunčiami duomenys į serverį, naudojant globalios būsenos valdymo įrankį:');
    console.log({
      email,
      password,
      remember,
    });
  };

  return (
    <Box sx={{
      height: '100vh',
      display: 'grid',
      placeItems: 'center',
      backgroundImage: 'url(/login-bg.png)',
      backgroundSize: 'cover',
    }}
    >
      <Paper
        component="form"
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: 4,
          width: 400,
          p: 4,
        }}
        elevation={10}
        onSubmit={handleSubmit}
      >
        <SecurityIcon sx={{ fontSize: 50, alignSelf: 'center' }} color="primary" />
        <Typography component="h1" variant="h4" align="center">Prisijungimas</Typography>
        <TextField
          variant="filled"
          label="El. paštas"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          variant="filled"
          label="Slaptažodis"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <FormControlLabel
          control={(
            <CustomSizeCheckbox
              checked={remember}
              onChange={(e) => setRemember(e.target.checked)}
            />
          )}
          label="Įsiminti prisijungimo duomenis"
        />
        <Button
          type="submit"
          variant="contained"
          sx={{ height: 60 }}
          size="large"
        >
          Prisijungti
        </Button>
      </Paper>
    </Box>
  );
};

export default LoginPage;
