import React from 'react';
import { useNavigate } from 'react-router-dom';
import BoxComponent from './Box';
import TypographyComponent from './Typography';
const Title = (props) => {
  const navigate = useNavigate();
  const titleContainerStyle = {
    display: 'flex',
    flexDirection: 'row',
    width: '235px',
    justifyContent: 'left',
    alignItems: 'center',
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
    fontFamily:'var(--basic)',
    letterSpacing: '3px',
    fontWeight: '400',
    color: props.color,
  };

  const titleH4Style = {
    fontFamily:'var(--basic)',
    fontWeight: 700,
    color: props.color,
  };

  return (
    <BoxComponent
    onClick={() => {navigate("/");}}
    style={titleContainerStyle}>
      <img src={props.img} alt="logo" style={logoStyle} />
      <BoxComponent style={nameContainerStyle}>
        <TypographyComponent variant='body1' style={titleH4Style}>JUNAID & JAWAD</TypographyComponent>
        <TypographyComponent variant="caption" style={titleH6Style}> CONSULTANCY </TypographyComponent>
      </BoxComponent>
    </BoxComponent>
  );
}

export default Title;
