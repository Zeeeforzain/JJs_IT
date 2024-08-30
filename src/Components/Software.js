import { Box, Typography } from '@mui/material';
import React from 'react';

export default function Software(props) {
  return (
    <Box
    width={{xs:'50%', md:'30%'}}
    height={{xs:'10vh', md:"20vh"}}
    display={'flex'}
    flexDirection={'column'}
    alignItems={{xs:'center', md:'center'}}
    justifyContent={{xs:'center', md:'space-evenly'}}
    textAlign={{xs:"center",md:'center'}}
    
    
    sx={{
      '&:hover':{xs:'none', md:{width:'32%', height:'22vh',cursor:'pointer', transition:'0.2s ease-out', boxShadow:"1px 2px 10px 2px #e0e0de"}}
  }}
    >
    <Box
  component="img"
  src={props.img}
  alt="logo"
  sx={{
    width: { xs: '30px', md: '60px' },
    height: { xs: '30px', md: '60px' },
  }}
/>

<Typography 
  variant="body1" 
  color="#616B7E" 
  sx={{
    fontSize: { xs: '0.5rem', md: '1.2rem' }
  }}
>
  {props.name}
</Typography>

    </Box>
  );
}
