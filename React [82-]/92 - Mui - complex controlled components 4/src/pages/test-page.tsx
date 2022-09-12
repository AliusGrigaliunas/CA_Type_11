import * as React from 'react';
import {
  Typography,
  Container,
} from '@mui/material';
import RangeField from '../components/form-controls/range-field';

const TestPage: React.FC = () => (
  <Container sx={{ mt: 6 }}>
    <Typography>min: 50, max: 200, value: [75, 150]</Typography>
    <RangeField min={50} max={200} value={[75, 150]} />

    <Typography>min: 50, max: 200</Typography>
    <RangeField min={50} max={200} />

    <Typography>min: 50, value: [75, 150]</Typography>
    <RangeField min={50} value={[75, 150]} />

    <Typography>min: 50</Typography>
    <RangeField min={50} />

    <Typography> max: 200, value: [75, 150]</Typography>
    <RangeField max={200} value={[75, 150]} />

    <Typography> max: 200</Typography>
    <RangeField max={200} />

    <Typography>value: [75, 150]</Typography>
    <RangeField value={[75, 150]} />

    <Typography>Empty</Typography>
    <RangeField />
  </Container>
);

export default TestPage;
