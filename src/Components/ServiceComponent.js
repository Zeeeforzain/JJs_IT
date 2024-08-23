import { Box, Typography} from '@mui/material';
import React from 'react';

export default function ServiceComponent(props) {
  return (
    <Box width={'30%'} height={"50vh"}>
      <img src={props.img} alt="logo" />
        <Typography variant="h6" sx={{color:'black', fontWeight:"600", marginTop:'20px'}} >{props.title}</Typography>
        <Typography variant="subtitle1" sx={{color:'#616B7E'}}>{props.description}</Typography>
    </Box>
  );
}
