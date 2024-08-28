import { Box, Typography, Button, List, ListItem } from "@mui/material";
import Title from "./Title";
import React from "react";
import ArrowRightRoundedIcon from "@mui/icons-material/ArrowRightRounded";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import SubscriptionsOutlinedIcon from "@mui/icons-material/SubscriptionsOutlined";
export default function Footer() {
  return (
    <Box sx={{ backgroundColor: "#1769aa" }}>
      <Box
        display={"flex"}
        justifyContent={"space-between"}
        alignItems={"center"}
        height={"30vh"}
        padding={{ xs: "10px 15px", md: "50px 80px" }}
        borderBottom={"1px solid white"}
      >
        <Typography
          variant="h3"
          sx={{
            fontSize: { xs: "1.3rem", md: "2.5rem" },
            width: { xs: "70%", md: "65%" },
            fontWeight: "700",
            color: "white",
          }}
        >
          We Deliver The Best Customer Experience
        </Typography>
        <Button
          variant="contained"
          style={{
            backgroundColor: "white",
            color: "black",
            textTransform: "none",
          }}
        >
          Let's Get Started <ArrowRightRoundedIcon fontSize="large" />
        </Button>
      </Box>
      <Box
        display={"flex"}
        alignItems={"center"}
        justifyContent={"space-around"}
        borderBottom={"1px solid white"}
        padding={{ xs: "5px", md: "20px" }}
        flexDirection={{ xs: "column", md: "row" }}
      >
        <Box
          width={{ xs: "100%", md: "25%" }}
          height={"45vh"}
          display={"flex"}
          flexDirection={"column"}
          alignItems={"left"}
          justifyContent={"space-around"}
          borderBottom={{ xs: "1px solid white", md: "none" }}
        >
          <Title color="white" />
          <Typography
            varient="body1"
            width={"100%"}
            margin={"10px 20px 10px 20px"}
            color={"white"}
            fontWeight={"500"}
          >
            JJs IT offers full-stack mobile and development services
          </Typography>
          <Box
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
            <Typography variant="body1" marginLeft={"10px"} fontWeight={"500"}>
              +92 00000000
            </Typography>
          </Box>
          <Box
            display={"flex"}
            justifyContent={"left"}
            alignItems={"center"}
            width={"100%"}
            margin={"10px 10px"}
            color={"white"}
          >
            <LocationOnOutlinedIcon fontSize="medium" sx={{ color: "white" }} />
            <Typography variant="body1" marginLeft={"10px"} fontWeight={"500"}>
              Floor 3, Office no 6, G11/4 Islamabad, Pakistan
            </Typography>
          </Box>
        </Box>
        <Box
          width={{ xs: "100%", md: "25%" }}
          height={"45vh"}
          display={"flex"}
          flexDirection={"column"}
          alignItems={"left"}
          justifyContent={"space-around"}
          borderBottom={{ xs: "1px solid white", md: "none" }}
        >
          <List sx={{ color: "white", fontWeight: "500" }}>
            <Typography variant="h5">Quick Links</Typography>
            <ListItem
              sx={{
                "&:hover": { textDecoration: "Underline", cursor: "pointer" },
              }}
            >
              Home
            </ListItem>
            <ListItem
              sx={{
                "&:hover": { textDecoration: "Underline", cursor: "pointer" },
              }}
            >
              Services
            </ListItem>
            <ListItem
              sx={{
                "&:hover": { textDecoration: "Underline", cursor: "pointer" },
              }}
            >
              Portfolio
            </ListItem>
            <ListItem
              sx={{
                "&:hover": { textDecoration: "Underline", cursor: "pointer" },
              }}
            >
              Mobile App Development
            </ListItem>
            <ListItem
              sx={{
                "&:hover": { textDecoration: "Underline", cursor: "pointer" },
              }}
            >
              Web Application Development
            </ListItem>
            <ListItem
              sx={{
                "&:hover": { textDecoration: "Underline", cursor: "pointer" },
              }}
            >
              Ideation & Design
            </ListItem>
          </List>
        </Box>
        <Box
          width={{ xs: "100%", md: "20%" }}
          height={"45vh"}
          display={"flex"}
          flexDirection={"column"}
          alignItems={"left"}
          justifyContent={"space-around"}
        >
          <List sx={{ color: "white", fontWeight: "500" }}>
            <Typography variant="h5">Our Blogs</Typography>
            <ListItem
              sx={{
                "&:hover": { textDecoration: "Underline", cursor: "pointer" },
              }}
            >
              Best Headless CMS|Top 10 Best Options
            </ListItem>
            <ListItem
              sx={{
                "&:hover": { textDecoration: "Underline", cursor: "pointer" },
              }}
            >
              Creating A Social Media App in 2022
            </ListItem>
            <ListItem
              sx={{
                "&:hover": { textDecoration: "Underline", cursor: "pointer" },
              }}
            >
              Creating an Educationl Android App - The Complete Guide
            </ListItem>
          </List>
        </Box>
      </Box>
      <Box
        display={"flex"}
        alignItems={"center"}
        justifyContent={"space-around"}
        width={{ xs: "100%", md: "80%" }}
        flexDirection={{ xs: "column", md: "row" }}
        textAlign={{ xs: "center" }}
      >
        <Typography variant="body1" color={"white"} fontWeight={"500"}>
          Copyright © 2024 Vizteck. All Rights Reserved by{" "}
          <Typography
            component="span"
            variant="body1"
            sx={{
              fontWeight: "500",
              cursor: "pointer",
              textDecoration: "2px Underline",
            }}
          >
            JJs IT
          </Typography>
        </Typography>
        <List sx={{ display: "flex" }}>
          <ListItem>
            <FacebookOutlinedIcon sx={{ color: "white", cursor: "pointer" }} />
          </ListItem>
          <ListItem>
            <EmailOutlinedIcon sx={{ color: "white", cursor: "pointer" }} />
          </ListItem>
          <ListItem>
            <SubscriptionsOutlinedIcon
              sx={{ color: "white", cursor: "pointer" }}
            />{" "}
          </ListItem>
        </List>
      </Box>
    </Box>
  );
}
