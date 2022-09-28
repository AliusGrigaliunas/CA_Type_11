import * as React from 'react';
import { TextField, FormControlLabel } from '@mui/material';
import CustomSizeCheckbox from 'components/form-controls/custom-size-checkbox';
import { useFormik } from 'formik';
import * as yup from 'yup';
import AuthForm from './components/auth-form';

type LoginValues = {
  email: string,
  password: string,
  remember: boolean,
};

const validationSchema = yup.object({
  email: yup.string()
    .required('Paštas privalomas')
    .email('Neteisingas pašto formatas'),
  password: yup.string()
    .required('Slaptažodis privalomas'),
});

const LoginPage: React.FC = () => {
  const {
    values, touched, errors, isValid, dirty,
    handleChange, handleBlur, handleSubmit,
  } = useFormik<LoginValues>({
    initialValues: {
      email: '',
      password: '',
      remember: true,
    },

    onSubmit(formValues) {
      console.log(formValues);
    },

    validationSchema,
  });

  return (
    <AuthForm
      title="Prisijungimas"
      submitText="Prisijungti"
      onSubmit={handleSubmit}
      isValid={isValid && dirty}
    >
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
