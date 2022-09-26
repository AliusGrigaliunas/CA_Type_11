import * as React from 'react';
import { TextField, FormControlLabel } from '@mui/material';
import CustomSizeCheckbox from 'components/form-controls/custom-size-checkbox';
import AuthForm from './components/auth-form';

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
    <AuthForm title="Prisijungimas" submitText="Prisijungti" onSubmit={handleSubmit}>
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
    </AuthForm>
  );
};

export default LoginPage;
