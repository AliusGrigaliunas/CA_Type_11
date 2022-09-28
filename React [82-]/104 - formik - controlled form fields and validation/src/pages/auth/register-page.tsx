import * as React from 'react';
import { TextField, Autocomplete } from '@mui/material';
import CheckboxGroup, { CheckboxOption } from 'components/form-controls/checkbox-group';
import AuthForm from './components/auth-form';

/*
  1. Parsiųsti ir būsenos kintamuosiuose išsaugoti categories ir marketingIntrests duomenis
    * categories duomenis pritaikykite ir pateikite Autocomplete field'ui 
    * marketingIntrests duomenis pritaikykite ir pateikite CheckboxGroup field'ui 
  2. Sukurti Formik helper'ius naudojant useFormik hook'są
    * Įrašykite pradines reikšmes:
    * Įrašykite onSubmit funkciją
  3. Įgalinkite TextField laukams:
    * įgalinkite įvedamų reikšmių dvipusį susiejimą su formik.values
    * paliestumo būsenos saugojimą formik.fields objekte
    * pateikite validacijos schemą (KOLKAS TIK TextField LAUKAMS)
    * įgalinkite klaidų rodymą
  4. Pritaikykite AuthForm komponentui validumo reikšmė naudojant formik.dirty ir formik.isValid helper'ius 
*/
const RegisterPage: React.FC = () => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');


  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log('Siunčiami duomenys į serverį, naudojant globalios būsenos valdymo įrankį:');
  };

  return (
    <AuthForm title="Registracija" submitText="Registruotis" onSubmit={handleSubmit}>
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
        options={...}
        multiple
        getOptionLabel={...}
        renderInput={(inputProps) => (
          <TextField
            label="..."
            variant="filled"
            {...inputProps}
          />
        )}
      />
      <CheckboxGroup
        label="..."
        name="..."
        options={...}
      />
    </AuthForm>
  );
};

export default RegisterPage;
