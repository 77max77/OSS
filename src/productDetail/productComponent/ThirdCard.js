import Grid from '@mui/material/Grid';
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import {useState} from 'react'
//import NightlightIcon from '@mui/icons-material/Nightlight';
//import Brightness5Icon from '@mui/icons-material/Brightness5';
import {BasicChips2} from './BasicChips'
//import Divider from '@mui/material/Divider';

export default function ThirdCard(props) {
    return (
      <Card sx={{ minWidth: 275 }}>
        <CardContent>
          <Grid container>  
            <Grid item xs>
              <Typography  variant="h3" component="div" sx={{ml:3,mt:3,fontSize: 20  }}  gutterBottom>
                {"하루 복용 용량"}
              </Typography>
            </Grid>
            
            <Grid item sx={{ml:3,mt:3,fontSize: 20 }}>
              <BasicChips2 times={props.times.ti} ></BasicChips2>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    );
  }