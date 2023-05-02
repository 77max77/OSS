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
  
  export function TextRating(props) {
    //점수
    //const value = {prodct.score};
    return (
      <Box
        sx={{
          width: 200,
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <Rating
          name="text-feedback"
          value={props.rate}
          readOnly
          precision={0.5}
          emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
        />
        <Box sx={{ ml: 2 }}>{labels[props.rate]}</Box>
      </Box>
    );
  }