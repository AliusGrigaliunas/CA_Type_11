import * as React from 'react';
import { TextField, FormControlLabel, Paper } from '@mui/material';
import CustomSizeCheckbox from 'components/form-controls/custom-size-checkbox';
import { useFormik, type FormikErrors } from 'formik';
import AuthForm from './components/auth-form';

type LoginValues = {
  email: string,
  password: string,
  remember: boolean,
};

type LoginErrors = FormikErrors<LoginValues>;

const LoginPage: React.FC = () => {
  const {
    values, touched, errors, isValid, dirty,
    handleChange, handleBlur,
  } = useFormik({
    initialValues: {
      email: '',
      password: '',
      remember: true,
    },

    onSubmit(formValues) {
      console.log(formValues);
    },

    validate({ email, password }) {
      console.log('ATLIEKAMA VALIDACIJA');
      const newErrors: LoginErrors = {};

      if (email === '') newErrors.email = 'Negali būti tuščias';
      if (password === '') newErrors.password = 'Negali būti tuščias';

      return newErrors;
    },
  });

  return (
    <AuthForm
      title="Prisijungimas"
      submitText="Prisijungti"
      onSubmit={() => { }}
      isValid={isValid && dirty}
    >
      <Paper
        elevation={3}
        sx={{
          p: 3, position: 'fixed', top: 100, left: 20,
        }}
      >
        <h1>Formik state</h1>
        <pre>
          {JSON.stringify({
            values, touched, errors, dirty,
          }, null, 4)}
        </pre>
      </Paper>

      <TextField
        name="email"
        variant="filled"
        label="El. paštas"
        type="email"
        value={values.email}
        onChange={handleChange}
        onBlur={handleBlur}
        error={touched.email && Boolean(errors.email)}
        helperText={touched.email && errors.email}
      />
      <TextField
        name="password"
        variant="filled"
        label="Slaptažodis"
        type="password"
        value={values.password}
        onChange={handleChange}
        onBlur={handleBlur}
        error={touched.password && Boolean(errors.password)}
        helperText={touched.password && errors.password}
      />
      <FormControlLabel
        control={(
          <CustomSizeCheckbox
            name="remember"
            checked={values.remember}
            onChange={handleChange}
            onBlur={handleBlur}
          />
        )}
        label="Įsiminti prisijungimo duomenis"
      />
    </AuthForm>
  );
};

export default LoginPage;
