import React from 'react';
import { List as MUIList, ListItem as MUIListItem } from '@mui/material';

export default function ListComponent(props) {
  return (
    <MUIList {...props}>
      {props.items.map((item, index) => (
        <MUIListItem key={index}>
          {item}
        </MUIListItem>
      ))}
    </MUIList>
  );
}
