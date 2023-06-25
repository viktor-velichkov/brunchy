import * as React from 'react';
import { AppBar, Box, Button, Container, Toolbar, Typography, useTheme } from '@mui/material';
import { useNavigate } from 'react-router-dom';

interface AppBarLinks {
  [title: string]: string;
}

const pages: AppBarLinks = {
  'About': 'dreamshot.bg',
  'Call Us': 'dreamshot.bg',
};

interface AppMenuProps {
  loggedUser?: boolean
}

export default function AppMenu(props: AppMenuProps) {
  const theme = useTheme();
  const navigate = useNavigate();

  return (
    <Box width={1}>
      <AppBar position="static" sx={{ backgroundColor: 'white', boxShadow: 'none' }}>
        
          <Toolbar sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, px: 3}} disableGutters>
            <Box width={1} sx={{ display: 'flex', alignItems: 'center' }}>
              <Typography variant="h6" noWrap component="a"
                sx={{
                  flexGrow: 1,
                  display: 'flex',
                  height: '64px',
                  fontSize: '36px',
                  fontWeight: 700
                }}>
                BRUNCHY
              </Typography>
              <Box sx={{ display: 'flex' }}>
                {Object.entries(pages).map(([page, pageUrl]) => (
                  <Box
                    component='a'
                    href='https://www.dreamshot.bg'
                    key={page}
                    sx={{ 
                      mx: 1, 
                      color: '#797979', 
                      display: 'block', 
                      fontFamily: 'PoppinsSemiBold', 
                      fontWeight: 600, fontSize: '14px', 
                      textDecoration: 'none' }}>
                    {page}
                  </Box>
                ))}
              </Box>
            </Box>            
            <Box sx={{ 
              width: {xs: '100%', md:'fit-content'},
              display: 'flex',
              justifyContent: 'end'
              }}>
              <Box sx={{
                width: '179px',
                height: '37px',
                backgroundColor: theme.palette.primary.light,
                color: theme.palette.primary.main,
                borderRadius: '18px',
                display: 'flex',
                alignItems: 'center'
              }}>
                <Typography sx={{
                  width: '123px',
                  height: '37px',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontFamily: 'PoppinsSemiBold',
                  fontSize: '13px',
                  color: theme.palette.primary.main,
                  cursor: 'pointer'
                }}>
                  Free Delivery
                </Typography>
                <Box sx={{
                  width: '55px',
                  height: '55px',
                  borderRadius: '27px',
                  backgroundColor: 'white',
                  right: 0,
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center'
                }}>
                  <img width='40px' height='35px' src='/images/png/image 1.png' />
                </Box>
              </Box>
            </Box>

          </Toolbar>
      </AppBar>
    </Box>
  );
}
