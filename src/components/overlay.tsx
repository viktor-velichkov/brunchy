import { Box } from '@mui/material';

export default function Overlay() {
  return (
    <Box sx={{
      width: '100vw',
      height: '100vh',
      backgroundColor: '#FFFFFFD6',
      opacity: 0.84,
      position: 'fixed',
      top: '0px',
      left: '0px',
      zIndex: 500
    }}>
    </Box>
  );
};