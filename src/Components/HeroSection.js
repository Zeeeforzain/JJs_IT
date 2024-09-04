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
      width={{ xs: "80%", md: "60%", xl:'40%' }}
      height={{ xs: "auto", md: "80vh" }}
      margin={{ xs: "5px 20px 20px 15px", md: "20px 20% 10px 70px", xl:"20px 50% 10px 25%" }}
    >
      <TypographyComponent
        variant="h2"
        sx={{
          fontWeight: "700",
          color: "var(--light)",
          fontSize: { xs: "1.75rem", md: "3.75rem" },
          fontFamily:'var(--main)'



        }}
      >
        Transforming Mobile and Web App Development Services
      </TypographyComponent>
      <TypographyComponent
        variant="h6"
        sx={{
          color: "var(--light)",
           fontFamily:'var(--main)',
          marginTop: {xs:'10px', md:'20px'},
          marginBottom: "20px",
          fontSize: { xs: "0.9rem", md: "1.25rem" },
        }}
      >
        Company focused on crafting business solutions that optimize and elevate
        business operations.
      </TypographyComponent>
      <BoxComponent width={"150px"} height={"8vh"}>
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
            borderRadius: "5px",
            width: "140px",
            height: "7vh",
            marginBottom:'15px',
            justifyContent: "space-around",
            transition: "width 0.3s ease-out, height 0.3s ease-out",
            "&:hover": {
              width: "150px",
              height: "8vh",
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
