import React from 'react';
import Appbar from './Components/Appbar';
import Box  from '@mui/material/Box';
import './Home.css'
import HeroSection from './Components/HeroSection';
export default function Home() {
  return (
    <Box className='home'>
      <Appbar/>
      <HeroSection/>
    </Box>
  );
}
