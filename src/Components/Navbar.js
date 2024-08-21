import React, { useState, useEffect } from 'react';
import './Navbar.css';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function Navbar() {
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolling(window.scrollY > 100); // Adjust scroll position as needed
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`navbar ${scrolling ? 'solid' : 'transparent'}`}>
      <div className="title">
        <img src="Images/logo.png" alt="logo" />
        <div className="nm">
          <Typography variant='h4'>Vizteck</Typography>
          <Typography variant='h6'>SOLUTIONS</Typography>
        </div>
      </div>
      <div className="menu">
        <ul>
          <li>Home</li>
          <li>Services</li>
          <li>Portfolio</li>
          <li>Blog</li>
          <Button size='large' variant='contained' color='primary'>Book Demo</Button>
        </ul>
      </div>
    </div>
  );
}
