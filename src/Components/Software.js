import React from 'react';
import BoxComponent from './Box';
import TypographyComponent from './Typography';

export default function Software(props) {
  return (
    <BoxComponent
    width={{xs:'50%', md:'30%'}}
    height={{xs:'10vh', md:"16vh"}}
    display={'flex'}
    flexDirection={'column'}
    alignItems={{xs:'center', md:'center'}}
    justifyContent={{xs:'center', md:'center'}}

    textAlign={{xs:"center",md:'center'}}
    sx={{
      '&:hover':{cursor:'pointer'}
    }}
    >
    <BoxComponent
  component="img"
  src={props.img}
  alt="logo"
  sx={{
    width: { xs: '25px', md: '50px' },
    height: { xs: '25px', md: '50px' },
    '&:hover':{width:{xs:'25px', md:'55px'},
    height:{xs:'25px', md:'55px'},
       transition:'0.2s ease-out'
    }
  }
  }
/>

<TypographyComponent 
  variant="body1" 
  color="var(--paragraph)" 
  sx={{
    fontSize: { xs: '0.5rem', md: '17px', xl:'20px' },
    '&:hover':{xs: '0.55rem', md: '18px', xl:'22px'},
     transition:'0.2s ease-out',
  }}
>
  {props.name}
</TypographyComponent>

    </BoxComponent>
  );
}
