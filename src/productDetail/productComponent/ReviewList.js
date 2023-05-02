import * as React from 'react';
import ReviewCard from './ReviewCard';
import Card from '@mui/material/Card';
import { useState } from 'react';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Pagination from '@mui/material/Pagination';

export default function AlignItemsList(props) {

  const [currentPage, setCurrentPage] = useState(1);
  const [reviewsPerPage] = useState(5);

  const totalReviews = props.reviews.length;
  const totalPages = Math.ceil(totalReviews / reviewsPerPage);

  const indexOfLastReview = currentPage * reviewsPerPage;
  const indexOfFirstReview = indexOfLastReview - reviewsPerPage;
  const currentReviews = props.reviews.slice(indexOfFirstReview, indexOfLastReview);

  const handlePageChange = (event, value) => {
    setCurrentPage(value);
  };

  return (
    <Card sx={{ bgcolor: '#fafafa', color: 'background. paper', p: 2 }}>
      {currentReviews.map((review) => (
        <ReviewCard key={review.usname} usname={review.usname} rscore={review.rscore} text={review.text} />
      ))}
      <Container fixed sx={{ width: 390, display: 'flex', alignItems: 'center' }}>
        <Stack spacing={2}>
          <Pagination count={totalPages} page={currentPage} onChange={handlePageChange} />
        </Stack>
      </Container>
    </Card>
  );
}