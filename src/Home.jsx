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
      <Swiper />
      <Box id="tools">
        <Tools />
      </Box>
      <Casestudies />
      <Box
        margin={{ xs: '15px 15px', md: "30px 80px" }}
        display={"flex"}
        alignItems={"center"}
        justifyContent={"left"}
      >
        <Adress
          title="Islamabad, Pakistan"
          address="G11/4, Islamabad, Pakistan"
          email="jjit@gmail.com"
        />
      </Box>
      <Footer />
    </Box>
  );
}
