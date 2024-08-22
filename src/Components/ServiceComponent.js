import { Box, Typography} from '@mui/material';
import React from 'react';

export default function ServiceComponent(props) {
  return (
    <Box width={'30%'} height={"50vh"} border={"1px solid black"}>
      <img src="" alt="logo" />
        <Typography>{props.title}</Typography>
        <Typography>{props.description}</Typography>
    </Box>
  );
}
