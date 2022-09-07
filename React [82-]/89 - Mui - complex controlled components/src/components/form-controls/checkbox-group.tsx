import React from 'react';
import {
  Box,
  FormControlLabel,
  Checkbox,
  FormLabel,
  FormGroup,
} from '@mui/material';

type CheckboxOption = {
  value: string,
  label: string,
};

type CheckboxGroupProps = {
  label: string,
  name: string,
  options: CheckboxOption[],
  value?: CheckboxOption[],
  onChange?: (event: React.ChangeEvent<HTMLInputElement>, value: CheckboxOption[]) => void,
};

type MutateOptions = (value: CheckboxOption[], option: CheckboxOption) => CheckboxOption[];

const CheckboxGroup: React.FC<CheckboxGroupProps> = ({
  label,
  name,
  options,
  value,
  onChange,
}) => {
  const selectedValues = value && value.map((x) => x.value);

  const createAppendedValue: MutateOptions = (currentValue, option) => [...currentValue, option];

  const createReducedValue: MutateOptions = (currentValue, option) => currentValue
    .filter((x) => x.value !== option.value);

  const handleCheckboxChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    checked: boolean,
    option: CheckboxOption,
  ) => {
    const componentIsControlled = value && onChange;

    if (componentIsControlled) {
      const newValue: CheckboxOption[] = checked
        ? createAppendedValue(value, option)
        : createReducedValue(value, option);

      onChange(event, newValue);
    } else {
      // Komponentas nekontroliuojamas

    }
  };

  return (
    <Box>
      <FormLabel sx={{ letterSpacing: '0.04em', mb: 1 }}>{label}</FormLabel>
      <FormGroup sx={{ display: 'flex', flexDirection: 'column', px: 2 }}>
        {options.map((option) => (
          <FormControlLabel
            key={option.value}
            control={(
              <Checkbox
                value={option.value}
                name={name}
                onChange={(e, newChecked) => handleCheckboxChange(e, newChecked, option)}
                checked={selectedValues?.includes(option.value)}
              />
            )}
            label={option.label}
          />
        ))}
      </FormGroup>
    </Box>
  );
};

export default CheckboxGroup;
