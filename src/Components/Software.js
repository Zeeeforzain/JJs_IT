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
    width: { xs: '30px', md: '80px' },
    height: { xs: '30px', md: '80px' },
    '&:hover':{width:{xs:'30px', md:'85px'},
    height:{xs:'30px', md:'85px'},
       transition:'0.2s ease-out'
    }
  }
  }
/>

<TypographyComponent 
  variant="body1" 
  color="#616B7E" 
  sx={{
    fontSize: { xs: '0.5rem', md: '17px' },
    '&:hover':{xs: '0.55rem', md: '18px'},
     transition:'0.2s ease-out',
  }}
>
  {props.name}
</TypographyComponent>

    </BoxComponent>
  );
}
