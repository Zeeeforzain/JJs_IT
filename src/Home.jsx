import React from "react";
import Appbar from "./Components/Appbar";
import HeroSection from "./Components/HeroSection";
import Services from "./Components/Services";
import Tools from "./Components/Tools";
import Casestudies from "./Components/Casestudies";
import Adress from "./Components/Adress";
import Footer from "./Components/Footer";
import Swiper from "./Components/Swiper";
import BoxComponent from "./Components/Box";

export default function Home() {
  return (
    <BoxComponent>
      <BoxComponent
        sx={{
          backgroundImage: "url(/Images/bg1.png)",
          backgroundSize: "100% 100%",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        <Appbar />
        <HeroSection />
      </BoxComponent>
      <BoxComponent id="services">
      <Services />
      </BoxComponent>
      <Swiper />
      <BoxComponent id="tools">
        <Tools />
      </BoxComponent>
      <Casestudies />
      <BoxComponent
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
      </BoxComponent>
      <Footer />
    </BoxComponent>
  );
}
