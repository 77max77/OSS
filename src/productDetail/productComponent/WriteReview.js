import React, { useState } from 'react';
import Box from '@mui/material/Box'; 
import TextField from '@mui/material/TextField'; 
import Typography from '@mui/material/Typography'; 
import Rating from '@mui/material/Rating'; 
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';


export default function FifthCard() { 
  const [title, setTitle] = useState(''); 
  const [review, setReview] = useState(''); 
  const [rating, setRating] = useState(0);
  const [submittedReviews, setSubmittedReviews] = useState([]);

  const handleSubmit = (event) => { event.preventDefault(); 
    console.log('Title:', title); 
    console.log('Review:', review); 
    console.log('Rating:', rating); 

    // handle form submission here // fetch 라이브러리 사용 
    fetch('http://localhost:3001/review', 
    { method: 'post', headers: { 'Content-Type': 'application/json', }, 
    body: JSON.stringify({ title, review, rating }), }) 
    .then((res) => res.text()) 
    .then((text) => console.log(text)) 
    .catch((err) => console.error(err)); 

    // store submitted review
    setSubmittedReviews([...submittedReviews, { title, review, rating }]);

    // clear form fields
    setTitle('');
    setReview('');
    setRating(0);
  };
  
  return (
    <Container
      sx={{
        width: "50%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <form onSubmit={handleSubmit}>
        <Box component="fieldset" borderColor="transparent">
          <Typography component="legend">별점:</Typography>
          <Rating
            name="rating"
            value={rating}
            onChange={(event, newValue) => setRating(newValue)}
          />
        </Box>
        <TextField
          label="Review"
          variant="outlined"
          multiline
          rows={4}
          value={review}
          onChange={(event) => setReview(event.target.value)}
          style={{ width: 800 }}
        />
        <Button
          variant="contained"
          color="primary"
          type="submit"
          style={{ width: 800, height: 50 }}
        >
          Submit
        </Button>
      </form>
    </Container>
  );
}
/*
import * as React from 'react';
import Box from '@mui/material/Box';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import AccountCircle from '@mui/icons-material/AccountCircle';

export default function InputWithIcon() {
  return (
    <Box sx={{ '& > :not(style)': { m: 1 } }}>
      <FormControl variant="standard">
        <InputLabel htmlFor="input-with-icon-adornment">
          상품평
        </InputLabel>
        <Input
          id="input-with-icon-adornment"
          startAdornment={
            <InputAdornment position="center">
              <AccountCircle />
            </InputAdornment>
          }
        />
      </FormControl>
    </Box>
  );
}
*/