import { createTheme } from '@mui/material';

const theme = createTheme({
  zIndex: {
    drawer: 1100,
    drawerButton: 1150,
    appBar: 1200,
  },
  common: {
    drawerWidth: {
      xs: 297,
      sm: 320,
      md: 340,
      lg: 360,
      xl: 460,
    },
  },
});

export default theme;
