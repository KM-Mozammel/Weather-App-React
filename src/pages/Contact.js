import React from 'react';
import { Box, Typography } from '@mui/material';

const Contact = () => {
  return (
    <Box sx={{ textAlign: 'center', p: 4 }}>
      <Typography variant="h4">Contact Us</Typography>
      <Typography variant="body1">You can reach us at contact@weatherapp.com.</Typography>
    </Box>
  );
};

export default Contact;
