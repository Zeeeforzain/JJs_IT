import React from 'react';
import ArrowRightRoundedIcon from '@mui/icons-material/ArrowRight';
import BoxComponent from './Box';
import TypographyComponent from './Typography';

export default function Tech({ name, isActive, onBoxClick }) {
  return (
    <BoxComponent
      marginBottom={'20px'}
      display={'flex'}
      justifyContent={'space-between'}
      alignItems={'center'}
         onClick={onBoxClick}
      sx={{
        backgroundColor: isActive ? 'var(--primary)' : 'transparent',
        color: isActive? 'white':'black',
        borderRadius:'5px',
        '&:hover': {
          boxShadow: '1px 1px 15px 5px whitesmoke',
          backgroundColor: isActive ? 'var(--primary)' : 'white',
          color: isActive? 'white':'black',
          cursor: 'pointer',
          borderRadius:'5px'
        },
      }}
    >
      <TypographyComponent
        sx={{
          fontFamily:'var(--basic)',
          width: '100%',
          padding: {xs:'5px', md:'10px'},
          fontSize:{xs:'0.6rem', md:'1.3rem', xl:'24px'}
        }}
        variant='h6'
      >
        {name}
      </TypographyComponent>
      <ArrowRightRoundedIcon fontSize='large' />
    </BoxComponent>
  );
}


