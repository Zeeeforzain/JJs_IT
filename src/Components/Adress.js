import { Box, Typography } from "@mui/material";
import React from "react";
import FmdGoodOutlinedIcon from "@mui/icons-material/FmdGoodOutlined";
import MarkunreadOutlinedIcon from "@mui/icons-material/MarkunreadOutlined";
export default function Adress(props) {
  return (
    <Box
      width={{xs:'100%',md:"24%"}}
      height={"25vh"}
      display={"flex"}
      flexDirection={"column"}
      justifyContent={"space-around"}
      boxShadow={"0px 2px 5px 2px #e6ebe7"}
      padding={"15px"}
    >
      <Typography variant="h6" fontWeight={"700"}>
        {props.title}
      </Typography>
      <Box display={"flex"} alignItems={"center"}>
        <FmdGoodOutlinedIcon fontSize="small" color="primary" />
        <Typography variant="caption">{props.address}</Typography>
      </Box>
      <Box display={"flex"} alignItems={"center"}>
        <MarkunreadOutlinedIcon fontSize="small" color="primary" />
        <Typography variant="caption">{props.email}</Typography>
      </Box>
    </Box>
  );
}
