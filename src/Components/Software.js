import { Box, Typography } from '@mui/material';
import React from 'react';

export default function Software(props) {
  return (
    <Box
    width={'20%'}
    height={"10vh"}
    display={'flex'}
    flexDirection={'column'}
    alignItems={'center'}
    justifyContent={'center'}
    sx={{
      '&:hover':{width:'22%', height:'15vh', transition:'0.5s ease-out'}
  }}
    >
      <img width={'250px'} height={'50vh'}
      src={props.img} alt="logo" />
      <Typography variant='body1' color={"#616B7E" }>{props.name}</Typography>
    </Box>
  );
}
