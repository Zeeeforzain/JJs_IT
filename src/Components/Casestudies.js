import { Box } from "@mui/material";
import React from "react";
import Headings from "./Headings";

export default function Casestudies() {
  return (
    <Box margin={"80px 80px"} border={"1px solid purple"}>
      <Headings
        titleVariant="h4"
        descVariant="h6"
        title="Case Studies!"
        description="Looking for a team who could help you meet your app development requirements? Here’s how we have helped various entrepreneurs in their journey."
      />
      <Box>
      </Box>
    </Box>
  );
}
