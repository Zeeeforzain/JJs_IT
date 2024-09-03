import React from 'react';
import BoxComponent from './Box';
import TypographyComponent from './Typography';

export default function Software(props) {
  return (
    <BoxComponent
    width={{xs:'50%', md:'30%'}}
    height={{xs:'10vh', md:"20vh"}}
    display={'flex'}
    flexDirection={'column'}
    alignItems={{xs:'center', md:'center'}}
    justifyContent={{xs:'center', md:'space-evenly'}}
    textAlign={{xs:"center",md:'center'}}
    
    
    sx={{
      '&:hover':{xs:'none', md:{width:'32%', height:'22vh',cursor:'pointer', transition:'0.2s ease-out', boxShadow:"1px 2px 10px 2px #e0e0de"}}
  }}
    >
    <BoxComponent
  component="img"
  src={props.img}
  alt="logo"
  sx={{
    width: { xs: '30px', md: '60px' },
    height: { xs: '30px', md: '60px' },
  }}
/>

<TypographyComponent 
  variant="body1" 
  color="#616B7E" 
  sx={{
    fontSize: { xs: '0.5rem', md: '1.2rem' }
  }}
>
  {props.name}
</TypographyComponent>

    </BoxComponent>
  );
}
