import * as React from 'react';
import {
  Box,
  Typography,
  Slider,
} from '@mui/material';
import { Input, InputContainer } from './components';

const RangeField: React.FC = () => (
  <Box sx={{ width: 300 }}>
    <InputContainer>
      <Input />
      <Typography>iki</Typography>
      <Input />
    </InputContainer>
    <Box sx={{ mx: 2 }}>
      <Slider value={[75, 120]} min={15} max={150} />
    </Box>
  </Box>
);

export default RangeField;
