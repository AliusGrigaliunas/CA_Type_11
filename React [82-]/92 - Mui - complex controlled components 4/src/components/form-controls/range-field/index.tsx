import * as React from 'react';
import {
  Box,
  Typography,
  Slider,
} from '@mui/material';
import { RangeInput, InputContainer, RangeInputProps } from './components';

type Range = [number, number];

type RangeFieldProps = {
  min?: number,
  max?: number,
  value?: Range
};

const orderRangeASC = (range: Range) => range.sort((x, y) => x - y) as Range;

const DEFAULT_MIN = 0;
const DEFAULT_MAX = 100;
const DEFAULT_RANGE: Range = [DEFAULT_MIN, DEFAULT_MAX];

const RangeField: React.FC<RangeFieldProps> = ({
  min,
  max,
  value = DEFAULT_RANGE,
}) => {
  const [bounds, setBounds] = React.useState<Range>(DEFAULT_RANGE);
  const [privateValue, setPrivateValue] = React.useState<Range>(DEFAULT_RANGE);

  const [privateMin, privateMax] = privateValue;
  const [lowerBound, higherBound] = bounds;

  const valueInRange = (newValue: number) => newValue <= higherBound && newValue >= lowerBound;

  const handleMinValueChange: RangeInputProps['onChange'] = (e, newMin) => {
    setPrivateValue(orderRangeASC([newMin, privateMax]));
  };

  const handleMaxValueChange: RangeInputProps['onChange'] = (e, newMax) => {
    setPrivateValue(orderRangeASC([privateMin, newMax]));
  };

  const calcInitBounds = (): Range => {
    const [minVal, maxVal] = orderRangeASC(value);

    const initMinBound = min || minVal;
    const initMaxBound = max || maxVal;

    return [initMinBound, initMaxBound];
  };

  const calcInitPrivateValue = (initBounds: Range): Range => {
    const [minVal, maxVal] = orderRangeASC(value);

    return value ? [minVal, maxVal] : initBounds;
  };

  React.useEffect(() => {
    const initBounds = calcInitBounds();
    const initPrivateValue = calcInitPrivateValue(initBounds);

    setBounds(initBounds);
    setPrivateValue(initPrivateValue);
  }, []);

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
        <Slider
          value={privateValue}
          min={lowerBound}
          max={higherBound}
          onChange={(_, newValue) => setPrivateValue(newValue as Range)}
          onChangeCommitted={(_, newValue) => { console.log('onChangeCommitted', { newValue }); }}
        />
      </Box>
    </Box>
  );
};

export default RangeField;
