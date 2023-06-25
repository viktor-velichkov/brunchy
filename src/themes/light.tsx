import { createTheme } from '@mui/material';

const theme = createTheme({
  palette: {
    primary: {
      main: '#FF8515',
      light: '#FFE5CD'
    },
    secondary: {
      main: '#F9F6F6'
    }
  },
  typography: {
    fontFamily: ['sans-serif', 'monospace', 'Roboto', 'Arial', 'Terminal', 'PoppinsBold'].join(',')
  },
  components: {
    MuiTypography: {
      styleOverrides: {
        root: {
          color: '#363636',
          display: 'flex',
          alignItems: 'center',
          width: 'fit-content',
          fontFamily: 'PoppinsBold',
          fontSize: 'inherit',
          lineHeight: 'inherit',
        }
      }
    },
    MuiButton: {
      styleOverrides: {
        root: {
          width: '154px',
          height: '54px',
          borderRadius: '15px',
          color: 'white',
          backgroundColor: '#FF8515',
          fontFamily: 'PoppinsBold',
          fontSize: 'inherit',
          lineHeight: 'inherit',
        }
      }
    },
    
  }
});

export { theme }
