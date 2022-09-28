import * as React from 'react';
import { TextField, Autocomplete } from '@mui/material';
import CheckboxGroup, { CheckboxOption } from 'components/form-controls/checkbox-group';
import CategoriesService from 'services/categories-service';
import MarketingIntrestsService from 'services/marketing-intrests-service';
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
  4. Pritaikykite AuthForm komponentui validumo reikšmė naudojant formik.dirty ir formik.isValid
  helper'ius
*/

const categoryToCheckboxOption = ({ id, title }: Category): CheckboxOption => ({
  value: id,
  label: title,
});

const marketingIntrestToCheckboxOption = ({ id, title }: MarketingIntrest): CheckboxOption => ({
  value: id,
  label: title,
});

const RegisterPage: React.FC = () => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [categoriesOptions, setCategoriesOptions] = React.useState<CheckboxOption[]>([]);
  const [
    matketingIntrestsOptions,
    setMarketingIntrestsOptions,
  ] = React.useState<CheckboxOption[]>([]);

  React.useEffect(() => {
    (async () => {
      const [
        fetchedCategories,
        fetchedMatketingIntrests,
      ] = await Promise.all([
        CategoriesService.fetchMany(),
        MarketingIntrestsService.fetchMany(),
      ]);

      setCategoriesOptions(fetchedCategories.map(categoryToCheckboxOption));
      setMarketingIntrestsOptions(fetchedMatketingIntrests.map(marketingIntrestToCheckboxOption));
    })();
  }, []);

  return (
    <AuthForm title="Registracija" submitText="Registruotis" onSubmit={() => { }}>
      <TextField
        name="email"
        variant="filled"
        label="El. paštas"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <TextField
        name="password"
        variant="filled"
        label="Slaptažodis"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <Autocomplete
        options={categoriesOptions}
        multiple
        renderInput={(inputProps) => (
          <TextField
            label="Dominančios kategorijos"
            name="categories"
            variant="filled"
            {...inputProps}
          />
        )}
      />
      <CheckboxGroup
        label="Dominančios reklamos"
        name="marketingIntrests"
        options={matketingIntrestsOptions}
      />
    </AuthForm>
  );
};

export default RegisterPage;
