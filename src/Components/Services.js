import React from 'react';
import "./Services.css"
import  Typography  from '@mui/material/Typography';
export default function Services(props) {
  return (
    <div className='services'>
        <img src={props.img} alt="logo" />
        <Typography variant='h4'>{props.title}</Typography>    
        <Typography variant='h5'>{props.description}</Typography>    
    </div>
  );
}
