import React from "react";
import Headings from "./Headings";
import TextField from "@mui/material/TextField";
import ArrowRightRoundedIcon from "@mui/icons-material/ArrowRightRounded";
import BoxComponent from "./Box";
import ButtonComponent from "./Button";
export default function Form() {
  return (
    <BoxComponent
      width={{ xs: "90%", md: "35%" }}
      height={"auto"}
      backgroundColor={"white"}
      borderRadius={"10px"}
      padding={"15px"}
    >
      <Headings
        titleVariant="h5"
        descVariant="body1"
        title="Contact Us"
        description="We deliver powerful mobile and application development services that drive impactful results"
      />

      <BoxComponent
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
      </BoxComponent>
      <BoxComponent
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
      </BoxComponent>
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
     <BoxComponent
  sx={{ 
    display:'flex',
    
        justifyContent:{xs:'center',md:'right'},
        alignItems:'center',
        marginTop:'15px'
  }}>
  <ButtonComponent
    variant="contained"
    color="var(--primary)"
    sx={{
        width:{xs:'100%',md:'30%'},
        fontFamily:'var(--basic)',
    }}
  >
    Submit <ArrowRightRoundedIcon fontSize="large" />
  </ButtonComponent>
</BoxComponent>
</BoxComponent>
);
}
