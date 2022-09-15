import { createTheme } from '@mui/material';

const { palette } = createTheme();

const theme = createTheme({
  palette: {

    manoSpalva: palette.augmentColor({
      color: {
        main: '#00ff00',
      },
    }),
  },
});

export default theme;
