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

type Range = [number, number];

const orderRangeASC = (range: Range) => range.sort((x, y) => x - y) as Range;

const RangeField: React.FC<RangeFieldProps> = ({ min = 0, max = 100 }) => {
  const [privateValue, setPrivateValue] = React.useState<Range>([min, max]);
  const [privateMin, privateMax] = privateValue;

  const valueInRange = (newValue: number) => newValue <= max && newValue >= min;

  const handleMinValueChange: RangeInputProps['onChange'] = (e, newMin) => {
    setPrivateValue(orderRangeASC([newMin, privateMax]));
  };

  const handleMaxValueChange: RangeInputProps['onChange'] = (e, newMax) => {
    setPrivateValue(orderRangeASC([privateMin, newMax]));
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
