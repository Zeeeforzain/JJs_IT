import React from "react";
import { Box, Button } from "@mui/material";
import Headings from "./Headings";
import TextField from "@mui/material/TextField";
import ArrowRightRoundedIcon from "@mui/icons-material/ArrowRightRounded";
export default function Form() {
  return (
    <Box
      width={{ xs: "90%", md: "35%" }}
      height={"auto"}
      backgroundColor={"white"}
      borderRadius={"10px"}
      padding={"15px"}
    >
      <Headings
        titleVariant="h5"
        descVariant="body1"
        title="Book a Demo"
        description="We provide high-impact mobile and application development services"
      />

      <Box
        component="form"
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: "center",
          "& > :not(style)": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField id="standard-basic" label="First Name" variant="standard" />
        <TextField id="standard-basic" label="Last Name" variant="standard" />
      </Box>
      <Box
        component="form"
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: "center",
          "& > :not(style)": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField id="standard-basic" label="Phone No" variant="standard" />
        <TextField id="standard-basic" label="Email" variant="standard" />
      </Box>
      <TextField
        fullWidth
        label="Message"
        id="fullWidth"
        variant="filled"
        multiline
        minRows={3}
        sx={{
          "& .MuiInputBase-root": {
            paddingTop: 3,
          },
          "& .MuiInputBase-input": {
            resize: "vertical",
            overflow: "auto",
          },
        }}
      />
     <Box
  sx={{ 
    display:'flex',
    
        justifyContent:{xs:'center',md:'right'},
        alignItems:'center',
        marginTop:'15px'
  }}>
  <Button
    variant="contained"
    color="primary"
    sx={{
        width:{xs:'100%',md:'30%'},
    }}
  >
    Submit <ArrowRightRoundedIcon fontSize="large" />
  </Button>
</Box>
</Box>
);
}
