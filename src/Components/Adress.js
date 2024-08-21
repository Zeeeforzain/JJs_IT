import React from 'react';
import "./Adress.css";
import Typography  from '@mui/material/Typography';
export default function Adress(props) {
  return (
    <div className='adress'>
      <Typography variant='h5'>{props.country}</Typography>
      <div className="location">
        <img src="" alt="location" />
        <Typography variant='h6'>{props.adress}</Typography>
      </div>
      <div className="mail">
        <img src="" alt="mail" />
        <Typography variant='h6'>{props.Email}</Typography>

      </div>
    </div>
  );
}
