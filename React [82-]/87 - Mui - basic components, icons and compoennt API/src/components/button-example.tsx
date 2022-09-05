import * as React from 'react';
import {
  Typography,
  Button,
  IconButton,
  Box,
} from '@mui/material';
import AccessibilityIcon from '@mui/icons-material/Accessibility';

const ButtonExample: React.FC = () => (
  <Box>
    <Typography variant="h6">Tuščiaviduris didelis mygtukas:</Typography>
    <Button size="large" variant="outlined">Button</Button>

    <Typography variant="h6">Pilnaviduris mažas mygtukas:</Typography>
    <Button size="small" variant="contained">Button</Button>

    <Typography variant="h6">Raudonas mygtuka su tekstu ir ikona gale:</Typography>
    <Button color="error" variant="contained" endIcon={<AccessibilityIcon />}>Button</Button>

    <Typography variant="h6">Žalias mygtukas su tekstu ir ikona prekyje:</Typography>
    <Button color="success" variant="contained" startIcon={<AccessibilityIcon />}>Button</Button>

    <Typography variant="h6">Geltonas mygtukas TIK su ikona:</Typography>
    <IconButton>
      <AccessibilityIcon />
    </IconButton>
  </Box>
);

export default ButtonExample;
