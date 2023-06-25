import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Box, Card, TextField, ThemeProvider } from '@mui/material';
import AppMenu from './components/appMenu';
import { theme } from './themes/light';
import Menu from './pages/menu';

function App({ children }: any) {
  return (     
    <ThemeProvider theme={theme}>
      <Box sx={{ height: '100vh', width: '100vw', display: 'flex', flexDirection: 'column'}}>
        <AppMenu></AppMenu>
        <Box sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', pl: 2}}>
          <Menu/>
        </Box>     
      </Box>      
    </ThemeProvider>
      
  );
}

export default App;
