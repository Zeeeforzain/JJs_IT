import { Box ,Typography} from '@mui/material';
import React from 'react';

export default function Tech(props) {
  return (
    <Box>
      <Typography variant='h5'>{props.name}</Typography>
    </Box>
  );
}
