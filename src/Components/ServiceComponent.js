import React from "react";
import BoxComponent from "./Box";
import TypographyComponent from "./Typography";

export default function ServiceComponent(props) {
  return (
    <BoxComponent
      width={{ xs: "100%", md: "30%" }}
      height={{ xs: "auto", md: "52vh" }}
      marginBottom={{ xs: "10px", md: "10px" }}
    >
      <img src={props.img} alt="logo" />
      <TypographyComponent
        variant="h6"
        sx={{
          fontSize: { xs: "1.1rem", md: "1.25rem" },
          color: "var(--dull)",
          fontFamily:'var(--basic)',
          fontWeight: "bold",
          marginTop: "20px",
          letterSpacing: "0px",
        }}
      >
        {props.title}
      </TypographyComponent>
      <TypographyComponent
        variant="subtitle1"
        sx={{
          fontSize: { xs: "0.95rem", md: "1.05rem" },
          fontFamily:'var(--main)',
          color: "var(--paragraph)",
        }}
      >
        {props.description}
      </TypographyComponent>
    </BoxComponent>
  );
}
