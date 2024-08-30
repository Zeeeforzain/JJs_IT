import React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { useNavigate } from 'react-router-dom';
const Title = (props) => {
  const navigate = useNavigate();
  const titleContainerStyle = {
    display: 'flex',
    flexDirection: 'row',
    width: '235px',
    justifyContent: 'center',
    alignItems: 'center',
    margin: '10px 15px 10px 15px',
    cursor: 'pointer',
  };

  const nameContainerStyle = {
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  };

  const logoStyle = {
    width: props.width,
    height: 'auto',
  };

  const titleH6Style = {
    letterSpacing: '3px',
    fontWeight: '400',
    color: props.color,
  };

  const titleH4Style = {
    fontWeight: 700,
    color: props.color,
  };

  return (
    <Box     onClick={() => {
      navigate("/");
    }}
    style={titleContainerStyle}>
      <img src={props.img} alt="logo" style={logoStyle} />
      <Box style={nameContainerStyle}>
        <Typography variant='body1' style={titleH4Style}>JUNAID & JAWAD</Typography>
        <Typography variant="caption" style={titleH6Style}> CONSULTANCY </Typography>
      </Box>
    </Box>
  );
}

export default Title;
