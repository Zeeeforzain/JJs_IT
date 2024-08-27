import { Box ,Typography} from '@mui/material';
import React from 'react';
import ArrowRightRoundedIcon from '@mui/icons-material/ArrowRight';
export default function Tech(props) {
  return (
    <Box 
    marginBottom={'20px'} display={'flex'} justifyContent={'space-between'} alignItems={'center'}
    sx={{'&:hover':{boxShadow: '1px 1px 15px 5px whitesmoke', backgroundColor:'white' , cursor:'pointer'}}}>
      <Typography 
      sx={{
        width:'100%',
        height:'8vh',
        color:'black', 
        padding:'10px'
     }}
      variant='h6'>{props.name}</Typography>
      <ArrowRightRoundedIcon fontSize='large'/>
    </Box>
  );
}
