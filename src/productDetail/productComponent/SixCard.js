import { Card } from '@mui/material';
import Chart from './Graph';
import Container from '@mui/material/Container';
import {useState} from 'react'
import Typography from '@mui/material/Typography';
export default function SixCard(props) {
  return (
    <Card sx={{mb: 5}}>
      <Container 
        fixed
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          mt: 10
        }}
      >
        {props.vitamins.map((vitamin) => (
          <Chart 
            key={vitamin.nname}
            filledSize={vitamin.filledSize}
            standard={vitamin.standard}
            unit={vitamin.unit}
            nname={vitamin.nname}
            setFilledSize={vitamin.filledSize}
          />
        ))}
        <Typography fixed sx={{mt:10,mb:5,fontSize:25}}  variant="h3">
          
        </Typography>
      </Container>
    </Card>
  );
}