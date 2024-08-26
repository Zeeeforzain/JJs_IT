import React from 'react';
import { Box, Typography } from '@mui/material';
export default function Headings(props) {
  return (
    <Box width={"80%"} marginBottom={'30px'}>
        <Typography variant={props.titleVariant} sx={{ fontWeight: "700", color: "black" }}>
          {props.title}
        </Typography>
        <Typography variant={props.descVariant} sx={{ color: "#616B7E" }}>
          {props.description}
        </Typography>
        </Box>
  );
}
