import { Box } from "@mui/material";
import React from "react";
import Headings from "./Headings";

export default function Casestudies() {
  return (
    <Box margin={"80px 80px"}>
      <Headings
        titleVariant="h4"
        descVariant="h6"
        title="Case Studies!"
        description="Looking for a team who could help you meet your app development requirements? Here’s how we have helped various entrepreneurs in their journey."
      />
      <Box display={'flex'} justifyContent={'space-between'} alignItems={'center'}>
        <Box width={'55%'}>
        <Headings
          titleVariant="h6"
          descVariant="body1"
          title="MyGroser"
          description="MyGroser required a complete grocery solution, warehouse management, bank apps integration, and commerce enablement through web and mobile applications. During covid, the app became the top company in Kuala Lumpur, delivering grocery with couple of thousand orders per day and more than 100k visitors per day"
        />
        </Box>
        <Box width={'450px'} height={'350px'} margin={'10px 100px 5px 0px'}>
        <img width={'400px'} height={'320px'} 
        src="Images/mygroser2.png" alt="" />
        </Box>
      </Box>
    </Box>
  );
}
