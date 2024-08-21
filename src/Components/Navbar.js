import React, { useState, useEffect } from 'react';
import './Navbar.css';
import Button from '@mui/material/Button';
import Title from './Title';

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
      <Title/>
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
