import React, { useState } from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Divider, Button } from '@mui/material';
import { useDispatch } from 'react-redux';
import { fetchBooks } from '@pages/Home/action';
import { stringifiedQueryParam } from '@utils/common';
import { FilterContainer } from './Filters.styled';
import FilterRating from './FilterRating';
import Price from './Prices';

const Filters = (): React.ReactElement => {
  const [ratingValue, setRatingValue] = useState(0);
  const [priceValue, setPriceValue] = useState(null);
  const dispatch = useDispatch();
  const { location } = window;
  const clearFilters = (): void => {
    location.href = '/';
  };

  const handleApplyFilters = (): void => {
    const query: any = {};
    if (location.search) {
        query.search = location.search.replace('?search=', '');
    }
    if (ratingValue) {
        query.rating = ratingValue;
    }
    if (priceValue?.length) {
        const [minPrice, maxPrice] = priceValue;
        query.minPrice = minPrice;
        query.maxPrice = maxPrice;
    }
    if (Object.keys(query).length) {
        dispatch(fetchBooks(stringifiedQueryParam(query)));
    }
  };
  return (
    <FilterContainer>
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Typography variant="subtitle1">Filter Applied</Typography>
        <Typography
          sx={{ cursor: 'pointer' }}
          onClick={clearFilters}
          color="gray"
          variant="subtitle2"
        >
          Clear All
        </Typography>
      </Box>
      <Divider />
      <FilterRating setRatingValue={setRatingValue} />
      <Price setPriceValue={setPriceValue} />
      <Button onClick={handleApplyFilters} color="primary">Apply</Button>
    </FilterContainer>
  );
};

export default Filters;
