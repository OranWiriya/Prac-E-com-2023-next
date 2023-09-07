'use client';

import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  typography: {
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
  },
  palette: {
    primary: {
      main: '#C9AB88',
    },
    secondary: {
      main: '#B1C7C8',
    },
    text: {
      primary: '#342120',
    },
    info: {
      main: '#8E5B40',
    },
    background: {
      default: '#DED1BB',
    },
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          display: 'flex',
          justifyContent: 'center',
          position: 'relative',
          minHeight: '90px',
          background: 'none',
          boxShadow: 'none',
        },
      },
    },
    MuiTypography: {
      defaultProps: {
        color: '#342120',
      },
    },
  },
});

export default theme;
