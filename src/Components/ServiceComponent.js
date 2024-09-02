import { Box, Typography } from "@mui/material";
import React from "react";

export default function ServiceComponent(props) {
  return (
    <Box
      width={{ xs: "100%", md: "30%" }}
      height={{ xs: "auto", md: "52vh" }}
      marginBottom={{ xs: "10px", md: "10px" }}
    >
      <img src={props.img} alt="logo" />
      <Typography
        variant="h6"
        sx={{
          fontSize: { xs: "1.1rem", md: "1.25rem" },
          color: "black",
          fontWeight: "bold",
          marginTop: "20px",
          fontFamily: "helvetica",
          letterSpacing: "0px",
        }}
      >
        {props.title}
      </Typography>
      <Typography
        variant="subtitle1"
        sx={{
          fontSize: { xs: "0.95rem", md: "1.05rem" },
          fontFamily: "helvetica",
          color: "#616B7E",
        }}
      >
        {props.description}
      </Typography>
    </Box>
  );
}
