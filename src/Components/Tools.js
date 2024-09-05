import React, { useState } from "react";
import Headings from "./Headings";
import Tech from "./Tech";
import Software from "./Software";
import BoxComponent from "./Box";

export default function Tools() {

  const defaultTech = "Mobile App Development"; 
  const [activeTech, setActiveTech] = useState(defaultTech);

  const handleTechClick = (techName) => {
    setActiveTech(techName);
  };

  return (
    <BoxComponent margin={{ xs: "50px 15px", md: "60px 70px", xl: "80px 23% 5px 23%" }}>
      <Headings
        titleVariant="h3"
        descVariant="h6"
        title="Tools and Technologies We Work In!"
        description="Assuring to provide exceptional customer experience and drive meaningful insights using the digital world's best app development practices and technology"
      />
      <BoxComponent
        display={"flex"}
        justifyContent={"space-between"}
        width={{ xs: "100%", md: "80%" }}
    
        >
        <BoxComponent
          width={{ xs: "60%", md: "40%" }}
          display={"flex"}
          flexDirection={"column"}
          alignItems={"left"}
 
        >
          <Tech
            name="Mobile App Development"
            isActive={activeTech === "Mobile App Development"}
            onBoxClick={() => handleTechClick("Mobile App Development")}
          />
          <Tech
            name="Web Development"
            isActive={activeTech === "Web Development"}
            onBoxClick={() => handleTechClick("Web Development")}
          />
          <Tech
            name="Backend Development"
            isActive={activeTech === "Backend Development"}
            onBoxClick={() => handleTechClick("Backend Development")}
          />
          <Tech
            name="Frontend Development"
            isActive={activeTech === "Frontend Development"}
            onBoxClick={() => handleTechClick("Frontend Development")}
          />
          <Tech
            name="SQA Services"
            isActive={activeTech === "SQA Services"}
            onBoxClick={() => handleTechClick("SQA Services")}
          />
          <Tech
            name="Project Management"
            isActive={activeTech === "Project Management"}
            onBoxClick={() => handleTechClick("Project Management")}
          />
          <Tech
            name="Design"
            isActive={activeTech === "Design"}
            onBoxClick={() => handleTechClick("Design")}
          />
        </BoxComponent>
        <BoxComponent
          display={"flex"}
          flexDirection={{ xs: "row", md: "row" }}
          justifyContent={{ xs: "space-between", md: "space-around" }}
          alignItems={{ xs: "start", md: "start" }}
          width={{ xs: "70%", md: "50%" }}
        >
          {activeTech === "Mobile App Development" && (
            <>
              <Software img="Images/react.png" name="React Native" />
              <Software img="Images/flutter.png" name="Flutter" />
              <Software img="Images/native.png" name="Native Android & iOS" />
            </>
          )}
          {activeTech === "Web Development" && (
            <Software img="Images/wordpress.png" name="Word Press" />
          )}
          {activeTech === "Backend Development" && (
            <Software img="Images/node.png" name="Node Js" />
          )}
          {activeTech === "Frontend Development" && (
            <>
              <Software img="Images/react.png" name="React" />
              <Software img="Images/angular.png" name="Angular" />
              <Software img="Images/next.png" name="Next Js" />
            </>
          )}
          {activeTech === "SQA Services" && (
            <>
              <Software img="Images/automation.png" name="Automation" />
              <Software img="Images/manual.png" name="Manual Testing" />
            </>
          )}
          {activeTech === "Project Management" && (
            <Software img="Images/agile.png" name="Agile" />
          )}
          {activeTech === "Design" && (
            <Software img="Images/ui.png" name="UI & UX" />
          )}
        </BoxComponent>
      </BoxComponent>
    </BoxComponent>
  );
}
