import { Card } from '@mui/material';
import Chart from './Graph';
import Container from '@mui/material/Container';
import {useState} from 'react'
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
export default function SixCard(props) {
  //05.18변경
  return (
    <Card sx={{mb: 5,backgroundColor: '#f5f5f5' }}>
   <Grid container direction="column" alignItems="center" justifyContent="center" mt={5} sx={{ overflow: 'auto' }}>
        {props.vitamins.map((vitamin,idx) => (
          <Chart 
            key={idx}
            filledSize={vitamin.filledSize}
            //standard={vitamin.standard}
            //unit={vitamin.unit}
            nname={vitamin.nname}
            setFilledSize={vitamin.filledSize}
          />
        ))}
      </Grid>
      <Typography sx={{ml:2,mt:2,mb:2,fontSize:20}}  variant="h3">
       보조 영양소 성분
      </Typography>
      {props.sub_Vitamins.map((sub_vitamin,idx) => (
        <Typography component="p" key={idx} sx={{ml:2,mt:2,mb:2,fontSize:15}}  variant="h3">
        {sub_vitamin.nname}: {sub_vitamin.size}
        </Typography>
         ))}
    </Card>
  );
}