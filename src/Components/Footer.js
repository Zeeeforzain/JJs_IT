import React from 'react';
import './Footer.css';
import   Typography from '@mui/material/Typography';
import Button  from '@mui/material/Button';
export default function Footer() {
  return (
    <div className='footer'>
        <div className="heading">
            <Typography variant='h2'>We Deliver The Best Customer Experience</Typography>
            <Button variant='contained' color='primary'>Let's Get Started</Button>
        </div>
        <div className="menu"></div>
        <div className="copyright">
            <Typography variant='h5'>Copyright © 2024 Vizteck. All Rights Reserved by <span>Vizteck Solution</span></Typography>
            <ul>
                <li><div className='logo'><img src="Images/fb.png" alt="" /></div></li>
                <li><div className='logo'><img src="Images/linked.png" alt="" /></div></li>
                <li><div className='logo'><img src="IMAGES/twitter.png" alt="" /></div></li>
            </ul>
        </div>
      
    </div>
  );
}
