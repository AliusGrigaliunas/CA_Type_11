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
  options: CheckboxOption[]
};

const CheckboxGroup: React.FC<CheckboxGroupProps> = ({
  label,
  name,
  options,
}) => (
  <Box>
    <FormLabel sx={{ letterSpacing: '0.04em', mb: 1 }}>{label}</FormLabel>
    <FormGroup sx={{ display: 'flex', flexDirection: 'column', px: 2 }}>
      {options.map((option) => (
        <FormControlLabel
          key={option.value}
          control={<Checkbox value={option.value} name={name} />}
          label={option.label}
        />
      ))}
    </FormGroup>
  </Box>
);

export default CheckboxGroup;
