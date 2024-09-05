import React from "react";
import Appbar from "./Components/Appbar";
import Box from "@mui/material/Box";
import HeroSection from "./Components/HeroSection";
import Services from "./Components/Services";
import Tools from "./Components/Tools";
import Casestudies from "./Components/Casestudies";
import Adress from "./Components/Adress";
import Footer from "./Components/Footer";
import Swiper from "./Components/Swiper";

export default function Home() {
  return (
    <Box>
      <Box
        sx={{
          backgroundImage: "url(/Images/bg1.png)",
          backgroundSize: "100% 100%",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        <Appbar />
        <HeroSection />
      </Box>
      <Services />
      <Swiper />
      <Box id="tools">
        <Tools />
      </Box>
      <Casestudies />
      <Box
        margin={{ xs: "15px 15px", md: "30px 70px" , xl:"60px 23% 60px 23%"}}
        display={"flex"}
        alignItems={"center"}
        justifyContent={"left"}
      >
        <Adress
          title="Islamabad, Pakistan"
          address="Floor 3, Office No. 6, G-11/4 Islamabad, Pakistan"
          email="spreadknowledge93@gmail.com"
        />
      </Box>
      <Footer />
    </Box>
  );
}
