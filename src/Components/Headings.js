import React from 'react';
import { Box, Typography } from '@mui/material';
export default function Headings(props) {
  return (
    <Box width={{xs:'100%', md:'80%'}} marginBottom={{xs:'15px',md:'15px'}} >
        <Typography variant={props.titleVariant} 
        sx={{
          fontSize:{xs:'1.9rem', md:'2.75rem'},
          fontWeight: "700", color: "black" }}>
          {props.title}
        </Typography>
        <Typography variant={props.descVariant} sx={{ color: "#616B7E" }}>
          {props.description}
        </Typography>
        </Box>
  );
}
