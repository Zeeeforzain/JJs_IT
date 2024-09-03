import React from 'react';
import { Typography as MUITypography } from '@mui/material';

export default function TypographyComponent(props) {
  return (
    <MUITypography {...props}>
      {props.children}
    </MUITypography>
  );
}
