import Grid from '@mui/material/Grid';
import * as React from 'react';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import IconButton from '@mui/material/IconButton';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import List from '@mui/material/List';

export default function GutterlessList() {
    return (
      <Grid container>
      <Grid item xs sx={{mt:0,amt:3,ml:2}}>
        랭킹
      </Grid>
      <Grid item >
        <List sx={{ width: '100%', maxWidth: 360}}>
          {[1, 1, 1].map((value) => (
            <ListItem
              key={value}
              disableGutters
              secondaryAction={
                <IconButton aria-label="ChevronRight">
                  <ChevronRightIcon />
                </IconButton>
              }
            >
              <ListItemText primary={`text ${value}`} />
            </ListItem>
          ))}
        </List>
        </Grid>
        </Grid>
    );
  }