import { Box, Typography } from "@mui/material";
import React from "react";
import Headings from "./Headings";

export default function Casestudies() {
  return (
    <Box margin={{ xs: "50px 15px", md: "30px 80px" }}>
      <Headings
        titleVariant="h3"
        descVariant="h6"
        title="Case Studies!"
        description="Looking for a team who could help you meet your app development requirements? Here’s how we have helped various entrepreneurs in their journey."
      />
      <Box
        display={"flex"}
        flexDirection={{ xs: "column", md: "row" }}
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        <Box width={{ xs: "100%", md: "55%" }}>
          <Typography
            sx={{
              marginTop:'10px',
              fontSize: { xs: "0.98rem", md: "1.15rem" },
              fontWeight: "700",
              color: "black",
            }}
            >
            MyGroser
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: "0.8rem", md: "1rem" },
              marginTop:'10px',
              color: "#616B7E",
            }}
          >
            MyGroser required a complete grocery solution, warehouse management,
            bank apps integration, and commerce enablement through web and
            mobile applications. During covid, the app became the top company in
            Kuala Lumpur, delivering grocery with couple of thousand orders per
            day and more than 100k visitors per day.
          </Typography>
        </Box>
        <Box
          width={{ xs: "100%", md: "450px" }}
          height={{ xs: "auto", md: "350px" }}
          margin={{ xs: "5px", md: "10px 100px 5px 0px" }}
        >
          <Box
            component="img"
            sx={{
              margin: { xs: "10px 10px", md: "1px" },
              width: { xs: "320px", md: "400px" },
              height: { xs: "220", md: "320px" },
            }}
            src="Images/mygroser2.png"
            alt=""
          />
        </Box>
      </Box>
    </Box>
  );
}
