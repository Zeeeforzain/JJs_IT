import React from "react";
import { Box, Typography } from "@mui/material";
import ServiceComponent from "./ServiceComponent";
export default function Services() {
  return (
    <Box margin={"80px 80px"}>
      <Box width={"65%"} marginBottom={'50px'}>
        <Typography variant="h4" sx={{ fontWeight: "700", color: "black" }}>
          What Can We Do For You?
        </Typography>
        <Typography variant="subtitle1" sx={{ color: "#616B7E" }}>
          A Web and Mobile application Development Company specializing in
          Digital Automation for small and medium businesses.
        </Typography>
      </Box>
      <Box
        display={"flex"}
        justifyContent={"space-between"}
        marginTop={"20px"}
        marginBottom={"20px"}
      >
        <ServiceComponent
        img='Images/computer.svg'
        title="CRM Application Services"
        description="We help you develop custom CRM for your business to automate your business processes, email integration, invoicing and payment integrations, and complete end to end automation for your busines"
        />
        <ServiceComponent
        img='Images/UX.svg'
        title="Ideation and Design Services"
        description="Want a simple yet valuable experience? Vizteck will aid you by providing you with a tremendous experience for product ideation and design services. That too with the best UX approach. So contact us now and get the best web and app development experience."
        />
        <ServiceComponent
          img='Images/App.svg'
          title="OnDemand App Development"
          description="Contact us and develop your own on-demand app like Uber, Uber Eats, scoot, and many more. We develop high-esteem on-demand startup apps that are fit for your needs. "
          />
      </Box>
      <Box
        display={"flex"}
        justifyContent={"space-between"}
        marginTop={"20px"}
        marginBottom={"20px"}
        >
        <ServiceComponent
        img='Images/Saas.svg'
        title="SAAS Application Development"
        description="For years, our SAAS application development services have aided numerous applications and website owners worldwide. We provide sophisticated and scalable SaaS application development services in a number of industries. "
        />
        <ServiceComponent
        img='Images/Web.svg'
        title="Web Development Services"
        description="From custom web development services to content management solutions, Vizteck offers you the best web development services, including headless CMS for each search engine."
        />
        <ServiceComponent
        img='Images/API.svg'
          title="API Integration Services"
          description="Vizteck has expertise in API Integration and Automation Services to connect your systems seamlessly between your websites, CRM, and accounting tools."
        />
      </Box>
    </Box>
  );
}
