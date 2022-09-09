import * as React from 'react';
import {
  Box,
  Typography,
  Slider,
} from '@mui/material';
import { RangeInput, InputContainer, RangeInputProps } from './components';

type RangeFieldProps = {
  min?: number,
  max?: number
};

type RangeInputChangeHandler = RangeInputProps['onChange'];

const RangeField: React.FC<RangeFieldProps> = ({ min = 0, max = 100 }) => {
  const [privateValue, setPrivateValue] = React.useState<[number, number]>([min, max]);
  const [privateMin, privateMax] = privateValue;

  const valueInRange = (newValue: number) => newValue <= max && newValue >= min;

  const handleMinValueChange: RangeInputChangeHandler = (e, newMinValue) => {
    setPrivateValue([newMinValue, privateMax]);
  };

  const handleMaxValueChange: RangeInputChangeHandler = (e, newMaxValue) => {
    setPrivateValue([privateMin, newMaxValue]);
  };

  return (
    <Box sx={{ width: 300 }}>
      <InputContainer>
        <RangeInput
          value={privateMin}
          onChange={handleMinValueChange}
          newValueIsValid={valueInRange}
        />
        <Typography>iki</Typography>
        <RangeInput
          value={privateMax}
          onChange={handleMaxValueChange}
          newValueIsValid={valueInRange}
        />
      </InputContainer>
      <Box sx={{ mx: 3 }}>
        <Slider value={privateValue} min={min} max={max} />
      </Box>
    </Box>
  );
};

export default RangeField;
