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
//05.18 변경
export default function FirstCard(props) {
    return (
        <Card sx={{mt:0,amt:10, backgroundColor: '#f5f5f5'}}>
          <Box
            display="flex"
            justifyContent="flex-end"
            alignItems="flex-end"
            sx={{mt:5,mr:3}}
          >
          <OutlinedButtons nid={props.id}></OutlinedButtons>
          </Box>
          <Grid container display="flex">
            <Grid item  sx={{mt:0,mb:5,mr:0}}>
             <CardMedia 
              sx={{ml:5,mr:2, height: 400,width:300 }}
              image={props.pimage}
              />
              
            </Grid >
            
            <Card  display="flex" sx={{mt:0,mb:5,height: 400,width:400}}>
            <Grid xs item  sx={{mt:1,ml:0,mr:0}}>
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
              <a href={props.lowPrice_link}>
              <span style={{ marginLeft: "30px" }}></span>
                {props.lowPrice}&nbsp;원
              </a>
              </Typography>
              <Typography
                variant="h3"
                component="div"
                sx={{ ml: 0, mr: 5, mt: 5, mb:5, fontSize: 20 }}
                key={props.sname1}
                sname={props.sname1}
                price={props.price1}
                gutterBottom
              >
                {props.sname1}
                <a href={props.plink1}>
                <span style={{ marginLeft: "60px" }}></span>
                {props.price1}&nbsp;원
                </a>
              </Typography>
              <Typography
                variant="h3"
                component="div"
                sx={{ ml: 0, mr: 5, mt: 5, mb:5, fontSize: 20 }}
                key={props.sname2}
                sname={props.sname2}
                price={props.price2}
                gutterBottom
              >
                {props.sname2}
                <a href={props.plink2}>
                <span style={{ marginLeft: "60px" }}></span>
                {props.price2}&nbsp;원
                </a>
              </Typography>
              </Grid>
          </Grid>
        </Card>
       
    );
  }

 