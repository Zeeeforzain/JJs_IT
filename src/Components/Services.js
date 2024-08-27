import React from "react";
import { Box } from "@mui/material";
import ServiceComponent from "./ServiceComponent";
import Headings from "./Headings";
export default function Services() {
  return (
    <Box margin={{ xs: "10px 10px", md: "80px 80px" }}>
      <Headings
        titleVariant="h4"
        descVariant="h6"
        title="What Can We Do For You?"
        description="A Web and Mobile application Development Company specializing in
          Digital Automation for small and medium businesses."
      />
      <Box
        display={{ xs: "block", sm: "flex" }}
        flexDirection={{ xs: "column", sm: "row" }}
        justifyContent="space-between"
        marginTop="20px"
        marginBottom="20px"
        alignItems="center"
      >
        <ServiceComponent
          img="Images/computer.svg"
          title="CRM Application Services"
          description="We help you develop custom CRM for your business to automate your business processes, email integration, invoicing and payment integrations, and complete end to end automation for your business."
        />
        <ServiceComponent
          img="Images/UX.svg"
          title="Ideation and Design Services"
          description="Want a simple yet valuable experience? Vizteck will aid you by providing you with a tremendous experience for product ideation and design services. That too with the best UX approach. So contact us now and get the best web and app development experience."
        />
        <ServiceComponent
          img="Images/App.svg"
          title="OnDemand App Development"
          description="Contact us and develop your own on-demand app like Uber, Uber Eats, Scoot, and many more. We develop high-esteem on-demand startup apps that are fit for your needs."
        />
      </Box>
      <Box
      display={{ xs: "block", sm: "flex" }}
      flexDirection={{ xs: "column", sm: "row" }}
      justifyContent="space-between"
      marginTop="20px"
      marginBottom="20px"
      alignItems="center"
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
