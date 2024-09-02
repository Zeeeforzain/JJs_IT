import React from "react";
import { Box, Typography } from "@mui/material";
export default function Headings(props) {
  return (
    <Box
      width={{ xs: "90%", md: "65%" }}
      marginBottom={{ xs: "15px", md: "15px" }}
    >
      <Typography
        variant={props.titleVariant}
        sx={{
          fontSize: { xs: "1.5rem", md: "2.75rem" },
          fontWeight: "700",
          color: "black",
        }}
      >
        {props.title}
      </Typography>
      <Typography
        variant={props.descVariant}
        sx={{ 
          marginTop:'5px',
          fontSize: { xs: "0.97rem", md: "1rem" }, color: "#616B7E" }}
      >
        {props.description}
      </Typography>
    </Box>
  );
}
