import React, { useState } from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import { ratingsData, IRatingData } from '@utils/common';

interface Props {
    setRatingValue: (args: number) => void;
}

const FilterRating = ({ setRatingValue } : Props): React.ReactElement => {
  const [ratings, setRating] = useState(ratingsData);

  const handleRating = (selectedRating: IRatingData): void => {
    const updateRatings: IRatingData[] = ratings.map((rating: IRatingData) => {
      if (rating.id === selectedRating.id) {
        rating.isSelected = true;
      } else {
        rating.isSelected = false;
      }
      return rating;
    });
    setRating(updateRatings);
    setRatingValue(selectedRating.count);
  };
  return (
    <Box>
      <Typography variant="subtitle1" marginTop="10px" fontWeight="bold">
        Avg. Customer Review
      </Typography>
      {ratings.map((rating: IRatingData) => (
        <Box
          sx={{ cursor: 'pointer' }}
          onClick={(): void => handleRating(rating)}
          key={rating.id}
          display="flex"
          alignItems="center"
        >
          <Rating readOnly value={rating.count} />
          <Typography
            fontWeight={rating.isSelected ? 'bold' : 'normal'}
            variant="caption"
            marginLeft="10px"
          >
            && Up
          </Typography>
        </Box>
      ))}
    </Box>
  );
};

export default FilterRating;
