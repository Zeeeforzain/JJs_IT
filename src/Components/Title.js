import React from 'react';
import './Title.css';
import Typography from '@mui/material/Typography';
import  Box  from '@mui/material/Box';
export default function Title() {
  return (
      <Box className="title">
        <img src="Images/logo.png" alt="logo" />
        <Box className="nm">
          <Typography variant='h4'>Vizteck</Typography>
          <Typography variant='h6'>SOLUTIONS</Typography>
        </Box>
      </Box>
  );
}
