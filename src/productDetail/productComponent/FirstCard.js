import Grid from '@mui/material/Grid';
import CardMedia from '@mui/material/CardMedia';
import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import {TextRating} from './TextRating'
//import GutterlessList from './Rank'
//import BasicList from './CostRank'
import OutlinedButtons from './Button'

export default function FirstCard(props) {
    return (
        <Card sx={{mt:0,amt:10}}>
          <Box
            display="flex"
            justifyContent="flex-end"
            alignItems="flex-end"
            sx={{mt:5,mr:5}}
          >
          <OutlinedButtons  ></OutlinedButtons>
          </Box>
          <Grid container>
            <Grid item  sx={{mt:0,mb:5,mr:0}}>
              <CardMedia 
              sx={{ml:5, height: 400,width:200 }}
              image={props.pimage}
              />
            </Grid >
            <Card sx={{mt:8,mb:5}}>
            <Grid xs item  sx={{mt:3,ml:3,mr:10}}>
              <CardActions sx={{ml:1,mb:2}} >
                <Link  size="large"  color="#78909c">{props.pfrom}</Link>
              </CardActions>
            <CardContent>
              <Typography variant="h3" sx={{mt:-4,fontSize: 30 }} color="text.secondary" gutterBottom>
              {props.pname}
              </Typography>
              <Grid container>
                <Grid item >
                <TextRating rate={props.prating} ></TextRating>
              </Grid>
              <Grid item sx={{mb:10}} >
                <Link color="#7e57c2">리뷰</Link>
                </Grid>
              </Grid>
 
            </CardContent>
          </Grid>
          </Card>
            <Grid xs item sx={{mt:0,ml:3}}>
              <Typography  variant="h3" component="div" sx={{ml:0,mr:5,mt:10,fontSize:30 }}   gutterBottom>
              최저가
              </Typography>
              
              <Typography
                variant="h3"
                component="div"
                sx={{ ml: 0, mr: 5, mt: 5, fontSize: 20 }}
                key={props.sname1}
                sname={props.sname1}
                price={props.price1}
                gutterBottom
              >
                {props.sname1}
                <span style={{ marginLeft: "110px" }}></span>
                {props.price1}원
              </Typography>
              <Typography
                variant="h3"
                component="div"
                sx={{ ml: 0, mr: 5, mt: 5, fontSize: 20 }}
                key={props.sname2}
                sname={props.sname2}
                price={props.price2}
                gutterBottom
              >
                {props.sname2}
                <span style={{ marginLeft: "110px" }}></span>
                {props.price2}원
              </Typography>
              </Grid>
              <Grid item sx={{mt:0}}>
              <Link variant="h3" component="div" sx={{ml:0,mr:5,mt:10,fontSize:30 }}gutterBottom>{props.lowPrice} 원</Link>
              </Grid>
          </Grid>
        </Card>
       
    );
  }

 