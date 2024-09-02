import { Box, Typography, Button } from "@mui/material";
import React from "react";
import ArrowRightRoundedIcon from "@mui/icons-material/ArrowRightRounded";
import { useNavigate } from "react-router-dom";
export default function HeroSection() {
  const navigate = useNavigate();
  return (
    <Box
      className="box"
      width={{ xs: "80%", md: "60%" }}
      height={{ xs: "auto", md: "80vh" }}
      margin={{ xs: "5px 20px 20px 15px", md: "20px 20% 10px 70px" }}
    >
      <Typography
        variant="h2"
        sx={{
          fontWeight: "700",
          color: "white",
          fontSize: { xs: "1.75rem", md: "3.75rem" },
          fontFamily:'Eudoxus Sans - 700'



        }}
      >
        Transforming Mobile and Web App Development Services
      </Typography>
      <Typography
        variant="h6"
        sx={{
          color: "white",
          marginTop: {xs:'10px', md:'20px'},
          marginBottom: "20px",
          fontSize: { xs: "0.9rem", md: "1.25rem" },
        }}
      >
        Company focused on crafting business solutions that optimize and elevate
        business operations.
      </Typography>
      <Box width={"150px"} height={"8vh"}>
        {" "}
        <Button
          onClick={() => {
            navigate("/ContactForm");
          }}
          variant="contained"
          color="primary"
          sx={{
            textTransform: "none",
            fontFamily: "helvetica",
            padding: "10px 20px",
            borderRadius: "5px",
            width: "140px",
            height: "7vh",
            marginBottom:'15px',
            justifyContent: "space-around",
            transition: "width 0.3s ease-out, height 0.3s ease-out",
            "&:hover": {
              width: "150px",
              height: "8vh",
            },
          }}
        >
          {" "}
          Let's Talk <ArrowRightRoundedIcon fontSize="large" />
        </Button>
      </Box>
      {/* <Box
        display={"flex"}
        marginTop={"50px"}
        marginBottom={"50px"}
        width={{xs:'80%',md:"50%"}}
        alignItems={'center'}
        justifyContent={"space-between"}
      >
        <Typography
          variant="subtitle1"
          sx={{
            color: "white",
            fontWeight: "500",
            marginTop: "20",
            marginBottom: "20",
            width:'40%'
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
            width:'100%',
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
        </Box> */}
    </Box>
  );
}
