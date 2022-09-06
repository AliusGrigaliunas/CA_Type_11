import * as React from 'react';
import {
  Paper,
  Box,
  Typography,
  TextField,
  Button,
  Autocomplete,
} from '@mui/material';
import SecurityIcon from '@mui/icons-material/Security';

const topics: Topic[] = [
  { id: '1', title: 'HTML' },
  { id: '2', title: 'CSS' },
  { id: '3', title: 'JavaScript' },
  { id: '4', title: 'DOM' },
  { id: '5', title: 'TypeScript' },
  { id: '6', title: 'Webpack' },
  { id: '7', title: 'GIT' },
  { id: '8', title: 'React' },
  { id: '9', title: 'Node' },
  { id: '10', title: 'Express' },
  { id: '11', title: 'SQL' },
  { id: '12', title: 'MongoDB' },
];

const RegisterPage: React.FC = () => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [selectedTopics, setSelectedTopics] = React.useState<Topic[]>([]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log('Siunčiami duomenys į serverį, naudojant globalios būsenos valdymo įrankį:');
    console.log({
      email,
      password,
      selectedTopics,
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
        <Typography component="h1" variant="h4" align="center">Registracija</Typography>
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
        <Autocomplete
          options={topics}
          multiple
          getOptionLabel={({ title }) => title}
          value={selectedTopics}
          onChange={(_, newSelectedTopics) => setSelectedTopics(newSelectedTopics)}
          renderInput={(inputProps) => (
            <TextField
              label="Dominančios temos"
              variant="filled"
              {...inputProps}
            />
          )}
        />
        <Button
          type="submit"
          variant="contained"
          sx={{ height: 60 }}
          size="large"
        >
          Registruotis
        </Button>
      </Paper>
    </Box>
  );
};

export default RegisterPage;
