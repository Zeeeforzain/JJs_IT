import React, { useState } from "react";
import Headings from "./Headings";
import TextField from "@mui/material/TextField";
import ArrowRightRoundedIcon from "@mui/icons-material/ArrowRightRounded";
import BoxComponent from "./Box";
import ButtonComponent from "./Button";
import axios from 'axios';

export default function Form() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    message: '',
  });

  const [status, setStatus] = useState('');


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };


  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('https://jjs-landing-page-backend.vercel.app/contact', formData);
      if (response.status === 200) {
        setStatus('Message sent successfully!');
      } else {
        setStatus('Failed to send message.');
      }
    } catch (error) {
      console.error('Error sending message:', error);
      setStatus('An error occurred while sending the message.');
    }
  };

  return (
    <BoxComponent
      width={{ xs: "90%", sm: '50%', md: "35%" }}
      height={"auto"}
      backgroundColor={"white"}
      borderRadius={"10px"}
      padding={"15px"}
      marginBottom={'25px'}
    >
      <Headings
        titleVariant="h5"
        descVariant="body1"
        title="Contact Us"
        description="We deliver powerful mobile and application development services that drive impactful results"
      />

      <form onSubmit={handleSubmit}>
        <BoxComponent
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            alignItems: "center",
            "& > :not(style)": { m: 1, width: "25ch" },
          }}
        >
          <TextField
            id="first-name"
            label="First Name"
            variant="standard"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
          />
          <TextField
            id="last-name"
            label="Last Name"
            variant="standard"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
          />
        </BoxComponent>

        <BoxComponent
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            alignItems: "center",
            "& > :not(style)": { m: 1, width: "25ch" },
          }}
        >
          <TextField
            id="phone"
            label="Phone No"
            variant="standard"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
          />
          <TextField
            id="email"
            label="Email"
            variant="standard"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </BoxComponent>

        <TextField
          fullWidth
          label="Message"
          id="message"
          variant="filled"
          multiline
          minRows={3}
          name="message"
          value={formData.message}
          onChange={handleChange}
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
            display: 'flex',
            justifyContent: { xs: 'center', md: 'right' },
            alignItems: 'center',
            marginTop: '15px'
          }}
        >
          <ButtonComponent
            type="submit"
            variant="contained"
            color="var(--primary)"
            sx={{
              width: { xs: '100%', md: '30%' },
              fontFamily: 'var(--basic)',
            }}
          >
            Submit <ArrowRightRoundedIcon fontSize="large" />
          </ButtonComponent>
        </BoxComponent>

        {status && <p>{status}</p>}
      </form>
    </BoxComponent>
  );
}
