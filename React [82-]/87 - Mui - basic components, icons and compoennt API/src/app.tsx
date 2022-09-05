import * as React from 'react';
import {
  Typography,
  Container,
} from '@mui/material';

const App: React.FC = () => (
  <Container>
    <Typography variant="h2" component="h1" align="center">Tai yra mano aplikacija</Typography>
    {/*
      1. Tuščiaviduris didelis mygtukas
      2. Pilnaviduris mažas mygtukas
      3. Raudonas mygtuka su tekstu ir  ikona gale
      4. Žalias mygtukas su tekstu ir ikona prekyje
      5. Geltonas mygtukas TIK su ikona
    */}
  </Container>
);

export default App;
