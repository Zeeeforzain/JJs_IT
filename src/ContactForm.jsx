import React from "react";
import Appbar from "./Components/Appbar";
import Footer from "./Components/Footer";
import Adress from "./Components/Adress";
import Form from "./Components/Form";
import { Box, Typography } from "@mui/material";
export default function ContactForm() {
  return (
    <Box className="contactForm">
      <Box
      sx={{
      backgroundImage: 'url(/Images/Home.png)',
      backgroundSize:'100% 100%', 
      backgroundRepeat: 'no-repeat',
      backgroundPosition:'center',}}
      >
      <Appbar />
      <Box 
      sx={{
        
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
        </Box>
            <Form/>
      </Box>
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
