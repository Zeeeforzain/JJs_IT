
import { Box, Typography } from '@mui/material';
import React from 'react';
import ArrowRightRoundedIcon from '@mui/icons-material/ArrowRight';

export default function Tech({ name, isActive, onBoxClick }) {
  return (
    <Box
      marginBottom={'20px'}
      display={'flex'}
      justifyContent={'space-between'}
      alignItems={'center'}
         onClick={onBoxClick}
      sx={{
        backgroundColor: isActive ? '#D30A0A' : 'transparent',
        color: isActive? 'white':'black',
        borderRadius:'5px',
        '&:hover': {
          boxShadow: '1px 1px 15px 5px whitesmoke',
          backgroundColor: isActive ? '#D30A0A' : 'white',
          color: isActive? 'white':'black',
          cursor: 'pointer',
          borderRadius:'5px'
        },
      }}
    >
      <Typography
        sx={{
          width: '100%',
          padding: {xs:'5px', md:'10px'},
          fontSize:{xs:'0.75rem', md:'1.25rem'}
        }}
        variant='h6'
      >
        {name}
      </Typography>
      <ArrowRightRoundedIcon fontSize='large' />
    </Box>
  );
}


