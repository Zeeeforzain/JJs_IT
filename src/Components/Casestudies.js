import React from "react";
import Headings from "./Headings";
import BoxComponent from "./Box";
import TypographyComponent from "./Typography";

export default function Casestudies() {
  return (
    <BoxComponent margin={{ xs: "50px 15px", md: "30px 70px", xl:"80px 5% 5px 5%" }}>
      <Headings
        titleVariant="h3"
        descVariant="h6"
        title="Case Studies!"
        description="Looking for a team who could help you meet your app development requirements? Here’s how we have helped various entrepreneurs in their journey."
      />
      <BoxComponent
        display={"flex"}
        flexDirection={{ xs: "column", md: "row" }}
        justifyContent={"space-between"}
        alignItems={"center"}
        width={'90%'}
      >
        <BoxComponent width={{ xs: "100%", md: "50%",lg:'50%', xl:'50%' }}
        >
          <TypographyComponent
            sx={{
              marginTop:'10px',
              fontSize: { xs: "27px", md: "1.25rem", xl:'23px' },
              fontWeight: "700",
              color: "var(--dull)",
              fontFamily:'var(--basic)',
            }}
            >
            MyGroser
          </TypographyComponent>
          <TypographyComponent
            sx={{
              fontSize: { xs: "1rem", md: "1.05rem", xl:'20px' },
              marginTop:'10px',
              fontFamily:'var(--main)',
              color: "var(--paragraph)",
            }}
          >
            MyGroser required a complete grocery solution, warehouse management,
            bank apps integration, and commerce enablement through web and
            mobile applications. During covid, the app became the top company in
            Kuala Lumpur, delivering grocery with couple of thousand orders per
            day and more than 100k visitors per day.
          </TypographyComponent>
        </BoxComponent>
        <BoxComponent
          width={{ xs: "100%", md: "450px" }}
          height={{ xs: "auto", md: "350px" }}
         display={'flex'}
         justifyContent={'center'}
         alignItems={'center'}
        >
          <BoxComponent
            component="img"
            sx={{
              margin: { xs: "10px 10px", md: "1px" },
              width: { xs: "250px",sm:'250px', md: "350px" },
              height: { xs: "180",sm:'250px', md: "270px" },
            }}
            src="Images/mygroser2.png"
            alt=""
          />
        </BoxComponent>
      </BoxComponent>
    </BoxComponent>
  );
}
