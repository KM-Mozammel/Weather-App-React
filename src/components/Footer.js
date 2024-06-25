import { useState } from 'react';
import React from 'react';
import { Box, Typography, Switch } from '@mui/material';
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

const Footer = () => {
    // state to manage the dark mode
    const [toggleDarkMode, setToggleDarkMode] = useState(true);

    // function to toggle the dark mode as true or false
    const toggleDarkTheme = () => {
      setToggleDarkMode(!toggleDarkMode);
    };
  
    // applying the primary and secondary theme colors
    const darkTheme = createTheme({
      palette: {
        mode: toggleDarkMode ? 'light' : 'dark', // handle the dark mode state on toggle
        primary: {
          main: '#90caf9',
        },
        secondary: {
          main: '#131052',
  
        },
      },
    });

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline/>
      <Box sx={{ textAlign: 'center', p: 2, mt: 'auto', backgroundColor: '#1976d2', color: 'white' }}>
        <Typography variant="body1">Mozammel Khandakar © 2024</Typography>
        <div style={{ height: '10px', fontSize: '10px', display: 'flex', flexDirection: 'row', alignItems:'center', justifyContent: 'center'}}>
            <h2>Toggle Dark mode</h2>
            <Switch checked={toggleDarkMode} onChange={toggleDarkTheme} />
          </div>
      </Box>
    </ThemeProvider>
  );
};

export default Footer;
