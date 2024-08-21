import React from 'react';
import './Title.css';
import Typography from '@mui/material/Typography';
export default function Title() {
  return (
      <div className="title">
        <img src="Images/logo.png" alt="logo" />
        <div className="nm">
          <Typography variant='h4'>Vizteck</Typography>
          <Typography variant='h6'>SOLUTIONS</Typography>
        </div>
      </div>
  );
}
