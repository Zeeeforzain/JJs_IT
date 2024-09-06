import React from "react";
import TypographyComponent from "./Typography";
import BoxComponent from "./Box";
export default function Headings(props) {
  return (
    <BoxComponent
      width={{ xs: "90%", md: "65%" }}
      marginBottom={{ xs: "15px", md: "15px" }}
    >
      <TypographyComponent
        variant={props.titleVariant}
        sx={{
          fontSize: { xs: "1.5rem", md: "42px", xl:'49px' },
          fontWeight: "700",
          color: "var(--dull)",
          fontFamily:'var(--main)',
        }}
      >
        {props.title}
      </TypographyComponent>
      <TypographyComponent
        variant={props.descVariant}
        sx={{ 
          marginTop:'5px',
          fontFamily:'var(--main)',
          fontSize: { xs: "0.9rem", md: "17px", xl:'20px' }, color: "#616B7E", fontWeight:'400' }}
      >
        {props.description}
      </TypographyComponent>
    </BoxComponent>
  );
}
