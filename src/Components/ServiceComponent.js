import React from "react";
import BoxComponent from "./Box";
import TypographyComponent from "./Typography";

export default function ServiceComponent(props) {
  return (
    <BoxComponent
      width={{ xs: "100%", md: "30%" }}
      height={'auto'}
      marginBottom={{ xs: "30px", md: "15px", xl:'15px' }}
  
    >

<BoxComponent
  sx={{
    width: { xs: '40px', md: '60px', xl: '70px' },
    height: { xs: '40px', md: '60px', xl: '70px' }
  }}
>
  <img
    style={{ width: '100%', height: '100%' }} // Let the image fill the container
    src={props.img}
    alt="logo"
  />
</BoxComponent>

      <TypographyComponent
        variant="h6"
        sx={{
          fontSize: { xs: "1.1rem", md: "1.25rem", xl:'23px' },
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
          fontSize: { xs: "0.95rem", md: "1.05rem", xl:'20px' },
          fontFamily:'var(--main)',
          color: "var(--paragraph)",
        }}
      >
        {props.description}
      </TypographyComponent>
    </BoxComponent>
  );
}
