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
  value,
}) => {
  const [rangeBounds, setRangeBounds] = React.useState<Range>(DEFAULT_RANGE);
  const [privateValue, setPrivateValue] = React.useState<Range>(DEFAULT_RANGE);
  const [privateMin, privateMax] = privateValue;
  const [lowerBound, higherBound] = rangeBounds;

  const valueInRange = (newValue: number) => newValue <= higherBound && newValue >= lowerBound;

  const handleMinValueChange: RangeInputProps['onChange'] = (e, newMin) => {
    setPrivateValue(orderRangeASC([newMin, privateMax]));
  };

  const handleMaxValueChange: RangeInputProps['onChange'] = (e, newMax) => {
    setPrivateValue(orderRangeASC([privateMin, newMax]));
  };

  // ComponentDidMount alternatyva
  React.useEffect(() => {
    const [minVal, maxVal] = (value && orderRangeASC(value)) ?? DEFAULT_RANGE;
    let finalValue: Range = DEFAULT_RANGE;
    let finalBounds: Range = DEFAULT_RANGE;

    if (min && max && value) {
      finalBounds = [min, max];
      finalValue = value;
    } else if (min && max && !value) {
      finalBounds = [min, max];
      finalValue = [min, max];
    } else if (min && !max && value) {
      finalBounds = [min, maxVal];
      finalValue = [minVal, maxVal];
    } else if (min && !max && !value) {
      finalBounds = [min, DEFAULT_MAX];
      finalValue = [min, DEFAULT_MAX];
    } else if (!min && max && value) {
      finalBounds = [minVal, max];
      finalValue = [minVal, maxVal];
    } else if (!min && max && !value) {
      finalBounds = [DEFAULT_MIN, max];
      finalValue = [DEFAULT_MIN, max];
    } else if (!min && !max && value) {
      finalBounds = value;
      finalValue = value;
    }

    setPrivateValue(finalValue);
    setRangeBounds(finalBounds);
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
