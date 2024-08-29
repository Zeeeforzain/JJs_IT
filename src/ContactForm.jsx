import React from "react";
import Appbar from "./Components/Appbar";
import Footer from "./Components/Footer";
import Adress from "./Components/Adress";
import Form from "./Components/Form";
import { Box, Typography } from "@mui/material";
export default function ContactForm() {
  return (
    <Box className="contactForm">
      <Appbar />
      <Box 
      sx={{
        backgroundImage: 'url(/Images/Home.png)',
        backgroundSize:'100% 100%', 
        backgroundRepeat: 'no-repeat',
        backgroundPosition:'center',
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' },
        justifyContent: {xs:'center',md:'space-around'},
        alignItems: 'center',
        paddingTop: '50px',
        paddingBottom: '50px',
        height:'auto'
      }}
      >
        <Box
          className="box"
          overflow={'hidden'}
          width={{ xs: "80%", md: "40%" }}
          height={{xs:'30vh', md:'70vh'}}
        >
          <Typography
            variant="h4"
            sx={{
              fontWeight: "700",
              color: "white",
              fontSize: { xs: "1.75rem", md: "2.75rem" },
            }}
          >
            Embark On Your Digital Journey Today
          </Typography>
          <Typography
            variant="h6"
            sx={{ color: "white", marginTop: "20px", marginBottom: "20px" }}
          >
            Give us a chance to answer all your business development related
            queries.
          </Typography>
          <Box
            display={"flex"}
            marginTop={"50px"}
            marginBottom={"50px"}
            width={{ xs: "80%", md: "70%" }}
            alignItems={"center"}
            justifyContent={"space-between"}
          >
            <Typography
              variant="subtitle1"
              sx={{
                color: "white",
                fontWeight: "500",
                marginTop: "20",
                marginBottom: "20",
                width: "40%",
              }}
            >
              Trusted By:
            </Typography>
            <Box
              sx={{
                display: "flex",
                flexDirection: { xs: "column", md: "row" },
                justifyContent: "space-between",
                alignItems: "center",
                width: "100%",
              }}
            >
              <img
                width={"130px"}
                height={"45px"}
                src="Images/nesma.png"
                alt="logo"
              />
              <img
                width={"130px"}
                height={"45px"}
                src="Images/mygroser.png"
                alt="logo"
              />
            </Box>
          </Box>
        </Box>
            <Form/>
      </Box>
      <Box 
      margin={'40px 60px '}
      >
      <Adress
      title="Islamabad, Pakistan"
      address="G11/4, Islamabad,Pakistan"
      email="jjit@gmail.com"
      />
      </Box>
      <Footer/>
    </Box>
  );
}
