// declare module '@mui/material/styles/createPalette' {
//   interface PaletteOptions {
//     manoSpalva: PaletteColor
//   }

//   interface Palette {
//     manoSpalva: PaletteColor
//   }
// }

declare module '@mui/material/styles/createTheme' {
  interface ThemeOptions {
    common: {
      drawerWidth: number,
    }
  }

  interface Theme {
    common: {
      drawerWidth: number,
    }
  }
}

export { };
