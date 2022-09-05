import * as React from 'react';
import {
  Typography,
  Container,
  Button,
  IconButton,
} from '@mui/material';
import AccessibilityIcon from '@mui/icons-material/Accessibility';

const App: React.FC = () => (
  <Container>
    <Typography variant="h2" component="h1" align="center">Tai yra mano aplikacija</Typography>
    <Typography variant="h6">Tuščiaviduris didelis mygtukas:</Typography>
    <Button size="large" variant="outlined">Button</Button>

    <Typography variant="h6">Pilnaviduris mažas mygtukas:</Typography>
    <Button size="small" variant="contained">Button</Button>

    <Typography variant="h6">Raudonas mygtuka su tekstu ir  ikona gale:</Typography>
    <Button color="error" variant="contained" endIcon={<AccessibilityIcon />}>Button</Button>

    <Typography variant="h6">Žalias mygtukas su tekstu ir ikona prekyje:</Typography>
    <Button color="success" variant="contained" startIcon={<AccessibilityIcon />}>Button</Button>

    <Typography variant="h6">Geltonas mygtukas TIK su ikona:</Typography>
    <IconButton>
      <AccessibilityIcon />
    </IconButton>

  </Container>
);

export default App;
