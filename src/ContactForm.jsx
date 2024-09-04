import React from "react";
import Appbar from "./Components/Appbar";
import Footer from "./Components/Footer";
import Adress from "./Components/Adress";
import Form from "./Components/Form";
import BoxComponent from "./Components/Box";
import TypographyComponent from "./Components/Typography";


export default function ContactForm() {
 
  return (
    <BoxComponent className="contactForm">
      <BoxComponent
      sx={{
      backgroundImage: 'url(/Images/bg1.png)',
      backgroundSize:'100% 100%', 
      backgroundRepeat: 'no-repeat',
      backgroundPosition:'center',}}
      >
      <Appbar />
      <BoxComponent 
      sx={{
        
        display: 'flex',
        flexDirection: { xs: 'column',sm:'column', md: 'row' },
        justifyContent: {xs:'center',md:'space-around', xl:'space-around'},
        alignItems: {xs:'center', md:'center', xl:'start'},
        padding:{xs:'0px 10px', md:'20px 20px 10px 0px', xl:"20px 24% 20px 22%" },
        height:'auto',   
      }}
      >
        <BoxComponent
          className="box"
          overflow={'hidden'}
          width={{ xs: "80%", md: "40%" }}
          height={{xs:'30vh', md:'70vh'}}
        >
          <TypographyComponent
            variant="h4"
            sx={{
              fontWeight: "700",
              color: "var(--light)",
              fontFamily:'var(--main)',
              fontSize: { xs: "1.75rem", md: "2.75rem" },
            }}
          >
            Begin Your Digital Journey Today
          </TypographyComponent>
          <TypographyComponent
            variant="h6"
            sx={{fontSize: { xs: "1rem", md: "1.25rem" },fontWeight:'400', color: "var(--light)", marginTop: "20px", marginBottom: "20px", fontFamily:'var(--main)', }}
          >
           Let us assist you with all your business development queries.
          </TypographyComponent>
        </BoxComponent>
            <Form/>
      </BoxComponent>
      </BoxComponent>
      <BoxComponent 
      margin={{xs:'40px 60px', md:'40 px 60px' , xl:"60px 25% 60px 25%"}}
      >
      <Adress
      title="Islamabad, Pakistan"
      address="G11/4, Islamabad,Pakistan"
      email="jjit@gmail.com"
      />
      </BoxComponent>
      <Footer/>
    </BoxComponent>
  );
}
