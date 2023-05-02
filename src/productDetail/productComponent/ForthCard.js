import * as React from 'react';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
/*
const text=""
const text2=""
*/
export default function BasicCard() {
  return (
    <Card sx={{ minWidth: 275 }}>
      <Typography   variant="h3" component="div" sx={{ml:3,mt:3,fontSize: 30  }} gutterBottom>
            Q.  
      </Typography>
      <Typography   variant="h3" component="div" sx={{ml:3,mt:3,fontSize: 20  }} gutterBottom>
            {"text"}
      </Typography>
      <Typography   variant="h3" component="div" sx={{ml:3,mt:3,fontSize: 30  }} gutterBottom>
            A.            
      </Typography>
      <Typography   variant="h3" component="div" sx={{ml:3,mt:3,fontSize: 20  }} gutterBottom>
            {"text2"}
      </Typography>
      <Divider sx={{mt:2}} variant="middle" />
    </Card>
  );
}