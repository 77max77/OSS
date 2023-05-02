import * as React from 'react';
import Button from '@mui/material/Button';
import AddBoxIcon from '@mui/icons-material/AddBox';

export default function OutlinedButtons() {
    return (
        <Button  color="success" variant="outlined" href="#outlined-buttons" endIcon={<AddBoxIcon/>}>
          내가 먹는 영양제에 추가
        </Button>
    );
  }
  