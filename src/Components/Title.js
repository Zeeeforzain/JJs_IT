import React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import styled from 'styled-components';

const TitleContainer = styled(Box)`
  display: flex;
  flex-direction: row;
  justify-content: left;
  align-items: center;
 margin:15px;
  cursor: pointer;
`;

const NameContainer = styled(Box)`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Logo = styled.img`
  width: 40px;
  height: auto;
`;

const TitleH4 = styled.h4`
  font-weight: 500;
  color: ${(props) => props.color};
  `;
  
  const TitleH6 = styled.h6`
  letter-spacing: 3px;
  font-weight: 400;
  color: ${(props) => props.color};
`;

export default function Title(props) {
  return (
    <TitleContainer>
      <Logo src="Images/jjs_it.png" alt="logo" />
      <NameContainer>
        <Typography variant="h6" color={props.color}>JUNAID & JAWAD</Typography>
        <Typography variant="caption" color={props.color}> CONSULTANCY </Typography>
      </NameContainer>
    </TitleContainer>
  );
}
