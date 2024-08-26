import React from 'react';
import './Title.css';
import Typography from '@mui/material/Typography';
import  Box  from '@mui/material/Box';
export default function Title() {
  return (
      <Box className="title">
        <img src="Images/jjsIt.png" alt="logo" width={'150px'} height={'200px'} />
        <Box className="nm">
          <Typography variant='h5'>JUNAID & JAWAD</Typography>
          <Typography variant='h6'>CONSULTANCY</Typography>
        </Box>
      </Box>
  );
}
