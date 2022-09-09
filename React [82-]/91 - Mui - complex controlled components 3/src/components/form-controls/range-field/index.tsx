import * as React from 'react';
import {
  Box,
  Typography,
  Slider,
} from '@mui/material';
import { RangeInput, InputContainer } from './components';

type RangeFieldProps = {
  min?: number,
  max?: number
};

type RangeInputChangeHandler = React.ChangeEventHandler<HTMLInputElement>;

const RangeField: React.FC<RangeFieldProps> = ({
  min = 0,
  max = 100,
}) => {
  const [privateValue, setPrivateValue] = React.useState<[number, number]>([min, max]);
  const [privateMinValue, privateMaxValue] = privateValue;

  const handleMinValueChange: RangeInputChangeHandler = (e) => {
    console.log('handleMinValueChange');
    // TODO: nustatyti reikšmę tik tuomet, jeigu ji nėra mažesnė už props'ą - min
    setPrivateValue([
      Number(e.target.value),
      privateMaxValue,
    ]);
  };

  const handleMaxValueChange: RangeInputChangeHandler = (e) => {
    // TODO: nustatyti reikšmę tik tuomet, jeigu ji nėra didesnė už props'ą - max
    setPrivateValue([
      privateMinValue,
      Number(e.target.value),
    ]);
  };

  return (
    <Box sx={{ width: 300 }}>
      <InputContainer>
        <RangeInput
          value={privateMinValue}
          onChange={handleMinValueChange}
        />
        <Typography>iki</Typography>
        <RangeInput
          value={privateMaxValue}
          onChange={handleMaxValueChange}
        />
      </InputContainer>
      <Box sx={{ mx: 3 }}>
        <Slider value={privateValue} min={min} max={max} />
      </Box>
    </Box>
  );
};

export default RangeField;
