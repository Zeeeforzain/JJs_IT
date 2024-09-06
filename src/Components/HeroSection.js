import React from "react";
import ArrowRightRoundedIcon from "@mui/icons-material/ArrowRightRounded";
import { useNavigate } from "react-router-dom";
import BoxComponent from "./Box";
import TypographyComponent from "./Typography";
import ButtonComponent from "./Button";
export default function HeroSection() {
  const navigate = useNavigate();
  return (
    <BoxComponent
      className="box"
      width={{ xs: "80%", md: "50%", xl:'60%' }}
      height={{ xs: "auto", md: "80vh" }}
      margin={{ xs: "5px 20px 20px 15px", md: "5px 20% 0px 70px", xl:"20px 0px 10px 5%" }}
    >
      <TypographyComponent
        variant="h2"
        sx={{
          fontWeight: "700",
          color: "var(--light)",
          fontSize: { xs: "1.75rem", md: "3.1rem", xl:'70px' },
          fontFamily:'var(--main)'



        }}
      >
        Transforming Mobile and Web Application Development Services
      </TypographyComponent>
      <TypographyComponent
        variant="h6"
        sx={{
          color: "var(--light)",
           fontFamily:'var(--main)',
          marginTop: {xs:'10px', md:'10px'},
          marginBottom: "15px",
          fontSize: { xs: "0.9rem", md: "1.25rem", xl:'23px' },
        }}
      >
        Company focused on crafting business solutions that optimize and elevate
        business operations.
      </TypographyComponent>
      <BoxComponent width={"150px"} height={"15vh"}>
        {" "}
        <ButtonComponent
          onClick={() => {
            navigate("/ContactForm");
          }}
          variant="contained"
          color="var(--primary)"
          sx={{
            textTransform: "none",
            fontFamily:'var(--main)',
            padding: "10px 20px",
            marginTop:'10px',
            borderRadius: "8px",
            width: "140px",
            height: {xs:'5vh',md:"8vh", xl:'10vh' },
            justifyContent: "space-around",
            transition: "width 0.3s ease-out, height 0.3s ease-out",
            "&:hover": {
              width: "150px",
              height: "9vh",
            },
          }}
        >
          {" "}
          Let's Talk <ArrowRightRoundedIcon fontSize="large" />
        </ButtonComponent>
      </BoxComponent>
    </BoxComponent>
  );
}
