
import Title from "./Title";
import React from "react";
import ArrowRightRoundedIcon from "@mui/icons-material/ArrowRightRounded";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import { useNavigate } from "react-router-dom";
import BoxComponent from "./Box";
import TypographyComponent from "./Typography";
import ButtonComponent from "./Button";
import ListComponent from './List';
import { useMediaQuery } from '@mui/material';

export default function Footer() {
  const items = ['Home', 'Services', 'Mobile App Development', 'Web App Development', 'UI/UX Services'];
  const navigate = useNavigate();
  const isMobile = useMediaQuery('(max-width:600px)');
  return (
    <BoxComponent sx={{ backgroundColor: "#004cb2" }}>
      <BoxComponent
        display={"flex"}
        flexDirection={{ xs: "column", md: "row" }}
        justifyContent={{ xs: "left", md: "space-between" }}
        alignItems={{xs:'left',md:"center",lg:'center', xl:'center'}}
        height={{ xs: "auto", md: "30vh" }}
        padding={{ xs: "5px", md: "50px 70px", xl:"20px 23% 20px 23%" }}
        borderBottom={"1px solid white"}
      >
        <TypographyComponent
          variant="h3"
          sx={{
            fontSize: { xs: "1.3rem", md: "2.6rem" },
            width: { xs: "70%", md: "65%" },
            fontWeight: "700",
            color: "var(--light)",
          fontFamily:'var(--main)',
            margin: "10px 20px",
            
          }}
        >
          We Deliver The Best Customer Experience
        </TypographyComponent>

        <ButtonComponent
          onClick={() => navigate("/ContactForm")}
          variant="contained"
          color="var(--light)"
          sx={{
            width: {xs:'160px',md:"200px", xl:'200px'},
            height: {xs:'7vh',md:"10vh", xl:'10vh'},
            textTransform: "none",
            fontFamily:'var(--main)',
            margin: "10px 20px",
            borderRadius: "10px",
            fontSize: "15px",
            color:"var(--dark)",
            transition: "width 0.4s ease-out, height 0.4s ease-out", 
            "&:hover": {
              width: {xs:'180px',md:"210px", xl:"210px"},
              height: {xs:'7vh', md:"11vh", xl:"11vh"},
            },
          }}
        >
          Let's Get Started{" "}
          <ArrowRightRoundedIcon
            sx={{
            fontSize:{ xs: "medium", md: "large", xl:'large'}}}
          
          />
        </ButtonComponent>
      </BoxComponent>
      <BoxComponent
        display={"flex"}
        height={"auto"}
        alignItems={"start"}
        justifyContent={"space-between"}
        borderBottom={"1px solid white"}
        padding={{ xs: "5px", md: "20px 70px", xl:"80px 23% 5px 23%" }}
        flexDirection={{ xs: "column", md: "row" }}
      >
        <BoxComponent
          width={{ xs: "100%", md: "25%" }}
          height={"auto"}
          display={"flex"}
          flexDirection={"column"}
          alignItems={"left"}
          justifyContent={"space-around"}
          borderBottom={{ xs: "1px solid white", md: "none" }}
        >
          <BoxComponent margin={"10px 0px 10px 10px"}>
            <Title img="Images/jjs_it2.png" color="var(--light)" width="30px"/>
          </BoxComponent>
          <TypographyComponent
            varient="body1"
            width={"100%"}
            margin={"10px 20px 10px 20px"}
            color={"white"}
            fontWeight={"500"}
             fontFamily='var(--main)'
          >
            JJs IT offers full-stack mobile and development services
          </TypographyComponent>
          <BoxComponent
            display={"flex"}
            justifyContent={"left"}
            alignItems={"center"}
            width={"100%"}
            margin={"10px 10px"}
            color={"white"}
          >
            <img
              src="Images/pakistan.png"
              alt=""
              width={"30px"}
              height={"auto"}
            />
            <TypographyComponent variant="body1" marginLeft={"10px"} fontWeight={"500"}  fontFamily='var(--main)'>
              +92 345 5276648
            </TypographyComponent>
          </BoxComponent>
          <BoxComponent
            display={"flex"}
            justifyContent={"left"}
            alignItems={"center"}
            width={"100%"}
            margin={"10px 10px"}
            color={"white"}
          >
            <LocationOnOutlinedIcon fontSize="medium" sx={{ color: "white" }} />
            <TypographyComponent variant="body1" marginLeft={"10px"} fontWeight={"500"}  fontFamily='var(--main)'>
              Floor 3, Office No. 6, G-11/4 Islamabad, Pakistan
            </TypographyComponent>
          </BoxComponent>
        </BoxComponent>
        <BoxComponent
          width={{ xs: "100%", md: "25%" }}
          height={"auto"}
          display={"flex"}
          flexDirection={"column"}
          alignItems={"left"}
          justifyContent={"space-around"}
        >
          <BoxComponent>
            <TypographyComponent
            fontFamily={'var(--basic)'}
            fontWeight={'700'}
            fontSize={{xs:'14px',md:'22px'}}
            color={'var(--light)'}
            marginTop={{xs:'10px', md:'0px'}}
            marginLeft='14px'
            >Quick Links</TypographyComponent>
          <ListComponent
          sx={{
            color:'var(--light)',
            fontFamily:'var(--main)',
            fontWeight:'400',
            fontSize:{xs:'14px',md:'17px'}
          }}
          items={items} />
          </BoxComponent>
        </BoxComponent>
      </BoxComponent>
      <BoxComponent
        display={"flex"}
        alignItems={"center"}
        justifyContent={"center"}
        width={{ xs: "100%", md: "100%" }}
        flexDirection={{ xs: "column", md: "row" }}
        textAlign={{ xs: "center" }}
        padding={"8px"}
      >
        <TypographyComponent variant="body1" color={"white"} fontWeight={"500"}  fontFamily='var(--main)'
        fontSize={{xs:'14px', md:'16px', xl:'20px'}}
        >
          Copyright © 2024 JJs. {isMobile && <br />}  All Rights Reserved by{" "}
          <TypographyComponent
            component="span"
            variant="body1"
            sx={{
              fontWeight: "500",
              cursor: "pointer",
              textDecoration: "2px Underline",
               fontFamily:'var(--main)'
            }}
          >
            JJs IT
          </TypographyComponent>
        </TypographyComponent>
      </BoxComponent>
    </BoxComponent>
  );
}
