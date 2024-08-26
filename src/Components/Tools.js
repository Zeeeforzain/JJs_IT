import { Box } from "@mui/material";
import React from "react";
import Headings from "./Headings";
import Tech from "./Tech";
import Software from "./Software";

export default function Tools() {
  return (
    <Box margin={"80px 80px"}>
      <Headings
        titleVariant="h4" descVariant="h6" title="Tools and Technologies We Work In!"
        description="Assuring to provide exceptional customer experience and drive meaningful insights using the digital world's best app development practices and technology"
      />
      <Box display={"flex"} justifyContent={"space-between"} width={"80%"}>
        <Box width={"45%"}>
          <Tech name="Mobile App Development" />
          <Tech name="Frontend Development" />
          <Tech name="Backend Development" />
          <Tech name="Database Development" />
          <Tech name="Ideation and Design" />
        </Box>
        <Box display={"flex"} justifyContent={"space-between"} width={"40%"}>
          <Software img="Images/ios.svg" name="iOS" />
          <Software img="Images/android.svg" name="Android" />
          <Software img="Images/flutter.svg" name="Flutter" />
        </Box>
      </Box>
    </Box>
  );
}
