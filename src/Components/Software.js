import { Box, Typography } from '@mui/material';
import React from 'react';

export default function Software(props) {
  return (
    <Box
    width={'30%'}
    height={"20vh"}
    display={'flex'}
    flexDirection={'column'}
    alignItems={'center'}
    justifyContent={'space-evenly'}
    textAlign={'center'}
    
    sx={{
      '&:hover':{width:'32%', height:'22vh',cursor:'pointer', transition:'0.3s ease-out', boxShadow:"1px 2px 10px 5px whitesmoke"}
  }}
    >
      <img width={'50px'} height={'50vh'}
      src={props.img} alt="logo" />
      <Typography variant='body1' color={"#616B7E" }>{props.name}</Typography>
    </Box>
  );
}
