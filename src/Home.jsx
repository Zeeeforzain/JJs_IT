import React from 'react';
import Appbar from './Components/Appbar';
import Box  from '@mui/material/Box';
import './Home.css'
import HeroSection from './Components/HeroSection';
import Services from './Components/Services';
import Tools from './Components/Tools';
import Casestudies from './Components/Casestudies';
export default function Home() {
  return (
    <Box className='home'>
      <Appbar/>
      <HeroSection/>
      <Services/>
      <Tools/>
      <Casestudies/>
    </Box>
  );
}
