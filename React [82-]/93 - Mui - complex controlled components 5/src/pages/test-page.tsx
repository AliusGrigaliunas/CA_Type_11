import * as React from 'react';
import { Container, Box } from '@mui/material';
import RangeField from '../components/form-controls/range-field';

const TestPage: React.FC = () => {
  const [priceRange, setPriceRange] = React.useState<NumberRange>([175, 280]);

  return (
    <Container sx={{ mt: 6 }}>
      <Box component="pre">
        {JSON.stringify(priceRange, null, 4)}
      </Box>
      <RangeField
        value={priceRange}
        onChange={(_, newPriceRange) => setPriceRange(newPriceRange)}
      />
    </Container>
  );
};

export default TestPage;
