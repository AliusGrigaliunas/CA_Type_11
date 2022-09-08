import * as React from 'react';
import {
  Container,
} from '@mui/material';
import RangeField from '../components/form-controls/range-field';

const TestPage: React.FC = () => (
  <Container sx={{ mt: 6 }}>
    <RangeField />
  </Container>
);

export default TestPage;
