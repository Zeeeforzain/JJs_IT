import React from "react";
import Appbar from "./Components/Appbar";
import Box from "@mui/material/Box";
import "./Home.css";
import HeroSection from "./Components/HeroSection";
import Services from "./Components/Services";
import Tools from "./Components/Tools";
import Casestudies from "./Components/Casestudies";
import Adress from "./Components/Adress";
import Footer from './Components/Footer';
import Swiper from './Components/Swiper';
export default function Home() {
  return (
    <Box className="home">
      <Appbar />
      <HeroSection />
      <Services />
      <Swiper/>
      <Tools />
      <Casestudies />
      <Box
        margin={{xs:'15px 15px',md:"80px 80px"}}
        display={"flex"}
        alignItems={"center"}
        justifyContent={"left"}
      >
        <Adress
          title="Islamabad, Pakistan"
          address="G11/4, Islamabad,Pakistan"
          email="jjit@gmail.com"
        />
        {/* <Adress
          title="USA"
          address="1 squire armor road, windham, NH,03076

"
          email="jjit@gmail.com"
        />
        <Adress
          title="Saudi Arabia"
          address="7654 Prince Nawaf Street, Al Khobar, 34426

"
          email="jjit@gmail.com"
        />
        <Adress
          title="Kingdom of Bahrain"
          address="No 851, Bldg No 2420, Rd No 2831, Seef District, Block 428

    "
          email="jjit@gmail.com"
        /> */}
      </Box>
      <Footer/>
    </Box>
  );
}
