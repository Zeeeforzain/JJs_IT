import React from "react";
import { Box, Typography, IconButton } from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { useState } from "react";

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
    <Box
      sx={{
        position: "relative",
        width: "95%",
        margin: "auto",
        overflow: "hidden",
       
      }}
    >
      <Box
        sx={{
          display: "flex",
          transform: `translateX(-${currentSlide * 100}%)`,
          transition: "transform 0.5s ease-in-out",
        }}
      >
        {slides.map((slide, index) => (
          <Box
            key={index}
            sx={{
              minWidth: "100%",
              height: {xs:'90vh', md:'85vh'},
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
            <Typography
              variant="h3"
              sx={{ color: "white", marginBottom: "10px", fontWeight: "600" }}
            >
              {slide.title}
            </Typography>
            <Typography
              variant="h6"
              sx={{ color: "white", marginBottom: "20px" }}
            >
              {slide.description}
            </Typography>
            <Typography
              variant="body1"
              sx={{ color: "white", marginBottom: "20px" }}
            >
              {slide.msg}
            </Typography>
            <Box
              display={"flex"}
              alignItems={"center"}
              justifyContent={"left"}
            >
              <Box
                component="img"
                src={slide.overlayImage}
                alt="Overlay"
                sx={{ width: "60px", height: "auto" }}
              />
              <Box
                display={"flex"}
                flexDirection={"column"}
                alignItems={"left"}
                justifyContent={"center"}
                margin={"10px 10px"}
              >
                <Typography variant="body1" sx={{ color: "black" }}>
                  {slide.name}
                </Typography>
                <Typography
                  variant="body1"
                  sx={{ color: "white", marginBottom: "20px" }}
                >
                  {slide.des}
                </Typography>
              </Box>
            </Box>
          </Box>
        ))}
      </Box>

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

      <Box
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
          <Box
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
      </Box>
    </Box>
  );
};

export default Swiper;
