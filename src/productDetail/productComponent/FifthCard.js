import * as React from 'react';
import Card from '@mui/material/Card';
//import CardContent from '@mui/material/CardContent';
import Container from '@mui/material/Container';
import WriteReview from './WriteReview'
//import BasicRating from './Basicrating'
export default function FifthCard(props) {
    return (
      <Card sx={{mb:5 }}>
        <Container fixed  sx={{
            width: '100%',
            display: 'flex',
            alignItems: 'center',mb:2,mt:2
          }}>
        <WriteReview id={props.id}/>
        </Container>
      </Card>
    );
  }
  