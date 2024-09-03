import React from "react";
import ServiceComponent from "./ServiceComponent";
import Headings from "./Headings";
import BoxComponent from "./Box";
export default function Services() {
  return (
    <BoxComponent margin={{ xs: "50px 15px", md: "40px 80px" }}>
      <Headings
        titleVariant="h3"
        descVariant="body1"
        title="What Can We Do For You?"
        description="A Web and Mobile application Development Company specializing in
          Digital Automation for small and medium businesses."
      />
      <BoxComponent
        display={{ xs: "block", sm: "flex" }}
        flexDirection={{ xs: "column", sm: "row" }}
        justifyContent="space-between"
        marginTop="35px"
        alignItems="start"
      >
        <ServiceComponent
          img="Images/App.svg"
          title="Mobile App Development"
          description="Get in touch with us to create your own on-demand app, just like Uber, Uber Eats, Scoot, and more. We specialize in developing high-quality on-demand startup apps tailored to meet your specific needs."
        />
        <ServiceComponent
          img="Images/Web.svg"
          title="Web Development Services"
          description="From bespoke web development to content management solutions, JJs IT provides top-tier web development services, including headless CMS optimized for every search engine.'"
        />
        <ServiceComponent
          img="Images/UX.svg"
          title="UI/UX Services"
          description="Looking for a straightforward yet impactful experience? JJs IT is here to offer you exceptional product ideation and design services, all with a top-notch UX approach. Reach out to us today and enjoy the finest web and app development experience."
        />
      </BoxComponent>
      <BoxComponent
        display={{ xs: "block", sm: "flex" }}
        flexDirection={{ xs: "column", sm: "row" }}
        justifyContent="space-around"
        marginTop="10px"
        alignItems="start"
      >
        <ServiceComponent
          img="Images/API.svg"
          title="API Integration Services"
          description="JJs IT specializes in API integration and automation services, ensuring seamless connectivity between your websites, CRM, and accounting tools."
        />
        <ServiceComponent
          img="Images/computer.svg"
          title="Software Quality Assurance"
          description="Offering comprehensive software quality assurance services, I ensure that your software products meet the highest standards of reliability and performance. Through meticulous testing and analysis, I identify and address issues early, delivering a seamless and bug-free user experience."
        />
      </BoxComponent>
    </BoxComponent>
  );
}
