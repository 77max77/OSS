import * as React from 'react';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
//var chiptext1=""


export function BasicChips(props) {
  
    return (
      <Stack sx={{ml:3,}} direction="row" spacing={1}>
        <Chip label={props.affect}  variant="outlined"/>
      </Stack>
    );
  }
  
export function BasicChips2(props) {
    return (
      <Stack sx={{ml:3}} direction="row" spacing={1}>
        <Chip label={props.times}  />
      </Stack>
    );
  }
  //05.18추가
  export function BasicChips3(props) {
    return (
      <Stack sx={{ml:0}} direction="row" spacing={1}>
        <Chip label={props.info}  />
      </Stack>
    );
  }