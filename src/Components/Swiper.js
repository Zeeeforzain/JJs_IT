import { React, useState } from "react";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import BoxComponent from "./Box";
import TypographyComponent from "./Typography";
import { IconButton } from "@mui/material";

const Swiper = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: "Images/slider.png",
      title: "Testimonials",
      description: "What Our Esteemed Clients Say About Us!",
      msg: "“They were able to bring the project live in a short period of time without any major issues. Communication was responsive and quick. They were knowledgeable, experienced with startups, and effective overall.”",
      overlayImage: "Images/kevin.svg",
      name: "Kevin",
      des: "CEO MyGroser",
    },
    {
      image: "Images/slider.png",
      title: "Slide 2",
      description: "What Our Esteemed Clients Say About Us!",
      msg: "“They were able to bring the project live in a short period of time without any major issues. Communication was responsive and quick. They were knowledgeable, experienced with startups, and effective overall.”",
      overlayImage: "Images/kevin.svg",
      name: "Kevin",
      des: "CEO MyGroser",
    },
    {
      image: "Images/slider.png",
      title: "Slide 3",
      description: "What Our Esteemed Clients Say About Us!",
      msg: "“They were able to bring the project live in a short period of time without any major issues. Communication was responsive and quick. They were knowledgeable, experienced with startups, and effective overall.”",
      overlayImage: "Images/kevin.svg",
      name: "Kevin",
      des: "CEO MyGroser",
    },
    {
      image: "Images/slider.png",
      title: "Slide 4",
      description: "What Our Esteemed Clients Say About Us!",
      msg: "“They were able to bring the project live in a short period of time without any major issues. Communication was responsive and quick. They were knowledgeable, experienced with startups, and effective overall.”",
      overlayImage: "Images/kevin.svg",
      name: "Kevin",
      des: "CEO MyGroser",
    },
  ];

  const handleNext = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };

  const handlePrev = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? slides.length - 1 : prevSlide - 1
    );
  };

  return (
    <BoxComponent
      sx={{
        position: "relative",
        width: {xs:'100%', md:'95%', xl:'60%'},
        margin:'auto',
        marginTop:{xs:'10px', md:'15px', xl:'50px'},
        overflow: "hidden",
       
      }}
    >
      <BoxComponent
        sx={{
          display: "flex",
          transform: `translateX(-${currentSlide * 100}%)`,
          transition: "transform 0.5s ease-in-out",
        }}
      >
        {slides.map((slide, index) => (
          <BoxComponent
            key={index}
            sx={{
              minWidth: "100%",
              height: {xs:'auto', md:'auto'},
              backgroundImage: `url(${slide.image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              position: "relative",
              display: "flex",
              alignItems: "left",
              justifyContent: "center",
              flexDirection: "column",
              textAlign: "left",
              padding: "50px",
            }}
          >
            <TypographyComponent
              variant="h3"
              sx={{fontFamily:'var(--main)', color: "var(--light)", marginBottom: "10px", fontWeight: "600" }}
            >
              {slide.title}
            </TypographyComponent>
            <TypographyComponent
              variant="h6"
              sx={{fontFamily:'var(--main)', color: "var(--light)", marginBottom: "20px" }}
            >
              {slide.description}
            </TypographyComponent>
            <TypographyComponent
              variant="body1"
              sx={{fontFamily:'var(--main)', color: "var(--light)", marginBottom: "20px" }}
            >
              {slide.msg}
            </TypographyComponent>
            <BoxComponent
              display={"flex"}
              alignItems={"center"}
              justifyContent={"left"}
            >
              <BoxComponent
                component="img"
                src={slide.overlayImage}
                alt="Overlay"
                sx={{ width: "60px", height: "auto" }}
              />
              <BoxComponent
                display={"flex"}
                flexDirection={"column"}
                alignItems={"left"}
                justifyContent={"center"}
                margin={"10px 10px"}
              >
                <TypographyComponent variant="body1" sx={{fontFamily:'var(--main)', color: "var(--dull)" }}>
                  {slide.name}
                </TypographyComponent>
                <TypographyComponent
                  variant="body1"
                  sx={{fontFamily:'var(--main)', color: "var(--light)", marginBottom: "20px" }}
                >
                  {slide.des}
                </TypographyComponent>
              </BoxComponent>
            </BoxComponent>
          </BoxComponent>
        ))}
      </BoxComponent>

      <IconButton
        onClick={handlePrev}
        sx={{
          position: "absolute",
          top: {xs:'90%',md:"85%"},
          left: {xs:'20px',md:"120px"},
          transform: "translateY(-50%)",
          color: "white",
          opacity: "0.7",
          "&:hover": { opacity: "1" },
        }}
      >
        <ArrowBackIosIcon />
      </IconButton>
      <IconButton
        onClick={handleNext}
        sx={{
          position: "absolute",
          top: {xs:'90%',md:"85%"},
          right: {xs:'20px',md:"120px"},
          transform: "translateY(-50%)",
          color: "white",
          opacity: "0.7",
          "&:hover": { opacity: "1" },
        }}
      >
        <ArrowForwardIosIcon />
      </IconButton>

      <BoxComponent
        sx={{
          position: "absolute",
          bottom: "20px",
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          gap: "8px",
        }}
      >
        {slides.map((_, index) => (
          <BoxComponent
            key={index}
            sx={{
              width: "30px",
              height: "2px",
              backgroundColor:
                currentSlide === index ? "white" : "rgba(255, 255, 255, 0.3)",
              cursor: "pointer",
            }}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </BoxComponent>
    </BoxComponent>
  );
};

export default Swiper;
