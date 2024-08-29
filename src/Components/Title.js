import React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

const Title = (props) => {
  const titleContainerStyle = {
    display: 'flex',
    flexDirection: 'row',
    width: '235px',
    justifyContent: 'center',
    alignItems: 'center',
    margin: '15px',
    cursor: 'pointer',
  };

  const nameContainerStyle = {
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  };

  const logoStyle = {
    width: '60px',
    height: 'auto',
  };

  const titleH6Style = {
    letterSpacing: '6px',
    fontWeight: '500',
    color: props.color,
  };

  const titleH4Style = {
    fontWeight: 700,
    color: props.color,
  };

  return (
    <Box style={titleContainerStyle}>
      <img src="Images/jjs_it.png" alt="logo" style={logoStyle} />
      <Box style={nameContainerStyle}>
        <Typography variant='h6' style={titleH4Style}>JUNAID & JAWAD</Typography>
        <Typography variant="caption" style={titleH6Style}> CONSULTANCY </Typography>
      </Box>
    </Box>
  );
}

export default Title;
