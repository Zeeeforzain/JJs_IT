import React from "react";
import BoxComponent from "./Box";
import TypographyComponent from "./Typography";

export default function ServiceComponent(props) {
  return (
    <BoxComponent
      width={{ xs: "100%", md: "30%" }}
      height={'auto'}
      marginBottom={{ xs: "30px", md: "15px", xl:'15px' }}
      sx={{
        transition: 'transform 0.3s ease-out', 
        "&:hover": {
          transform: 'scale(1.1)',
          cursor:'pointer'  
        }
      }}
    >
      <BoxComponent
        sx={{
          width: { xs: '40px', md: '60px', xl: '70px' },
          height: { xs: '40px', md: '60px', xl: '70px' },
          transition: 'width 0.3s ease-out, height 0.3s ease-out', 
          
        }}
      >
        <img
          style={{ width: '100%', height: '100%' }} 
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
          transition: 'font-size 0.3s ease-out',  
          
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
          transition: 'font-size 0.3s ease-out', 
          
        }}
      >
        {props.description}
      </TypographyComponent>
    </BoxComponent>
  );
}
