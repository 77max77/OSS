import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Card from '@mui/material/Card';
import * as React from 'react';
import Rating from '@mui/material/Rating';
import StarIcon from '@mui/icons-material/Star';
import Box from '@mui/material/Box';

const labels = {
    0.5: 'Useless',
    1: 'Useless+',
    1.5: 'Poor',
    2: 'Poor+',
    2.5: 'Ok',
    3: 'Ok+',
    3.5: 'Good',
    4: 'Good+',
    4.5: 'Excellent',
    5: 'Excellent+',
  };
  

export default function ReviewCard(props) {
    return (
      <Card sx={{ml:5,mr:5,mb:5,mt:5}}>
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt={props.usname} src="/static/images/avatar/1.jpg" />
            </ListItemAvatar>
            <ListItemText
              primary={props.usname}
              secondary={
                <React.Fragment>
                  
                  <Typography
                    sx={{ display: 'inline' }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                  <Box
                      sx={{
                        width: 200,
                        display: 'flex',
                        alignItems: 'center',
                      }}
                    >
                      <Rating
                        name="text-feedback"
                        value={props.rscore}
                        readOnly
                        precision={0.5}
                        emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
                      />
                      <Box sx={{ ml: 2 }}>{labels[props.rscore]}</Box>
                    </Box>
                  </Typography>
                {props.text}
                </React.Fragment>
              }
            />
          </ListItem>
      </Card>
    );
  }
