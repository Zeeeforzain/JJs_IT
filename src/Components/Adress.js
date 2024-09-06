import React from "react";
import FmdGoodOutlinedIcon from "@mui/icons-material/FmdGoodOutlined";
import MarkunreadOutlinedIcon from "@mui/icons-material/MarkunreadOutlined";
import BoxComponent from "./Box";
import TypographyComponent from "./Typography";
export default function Adress(props) {
  return (
    <BoxComponent
      width={{xs:'100%',md:"24%", xl:'20%'}}
      height={"25vh"}
      display={"flex"}
      flexDirection={"column"}
      justifyContent={"space-around"}
      boxShadow={"0px 2px 5px 2px #e6ebe7"}
      padding={"15px"}
    >
      <TypographyComponent variant="h6" fontWeight={"700"} sx={{fontFamily:'var(--basic)'}} >
        {props.title}
      </TypographyComponent  >
      <BoxComponent display={"flex"} alignItems={"center"}>
        <FmdGoodOutlinedIcon fontSize="small" sx={{color:'var(--primary)'}} />
        <TypographyComponent variant="caption"sx={{fontFamily:'var(--main)'}} marginLeft={'5px'}>{props.address}</TypographyComponent>
      </BoxComponent>
      <BoxComponent display={"flex"} alignItems={"center"}>
        <MarkunreadOutlinedIcon fontSize="small" sx={{color:'var(--primary)'}} />
        <TypographyComponent variant="caption" marginLeft={'5px'}sx={{fontFamily:'var(--main)'}} >{props.email}</TypographyComponent>
      </BoxComponent>
    </BoxComponent>
  );
}
