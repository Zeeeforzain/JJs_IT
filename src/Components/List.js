import React from 'react';
import { List as MUIList, ListItem as MUIListItem } from '@mui/material';
import TypographyComponent from './Typography';

export default function ListComponent(props) {
  return (
    <MUIList {...props}>
      {props.items.map((item, index) => (
        <MUIListItem key={index}
        sx={{ '&:hover':{
          textDecoration:'underline white',
          cursor:'pointer'
        }}}
        >
          {item}
        </MUIListItem>
      ))}
    </MUIList>
  );
}
