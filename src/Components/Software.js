import { Box, Typography } from '@mui/material';
import React from 'react';

export default function Software(props) {
  return (
    <Box
    width={{xs:'100%', md:'30%'}}
    height={"20vh"}
    display={'flex'}
    flexDirection={'column'}
    alignItems={{xs:'center', md:'center'}}
    justifyContent={{xs:'center', md:'space-evenly'}}
    textAlign={{xs:"center",md:'center'}}
    
    
    sx={{
      '&:hover':{width:'32%', height:'22vh',cursor:'pointer', transition:'0.2s ease-out', boxShadow:"1px 2px 10px 2px #e0e0de"}
  }}
    >
      <img width={'60px'} height={'60vh'}
      src={props.img} alt="logo" />
      <Typography variant='body1' color={"#616B7E" }>{props.name}</Typography>
    </Box>
  );
}
