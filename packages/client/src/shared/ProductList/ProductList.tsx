import * as React from 'react';
import { Box } from '@mui/material';
import ProductCard from '@shared/ProductCard';
import { ProductListProps, TProduct } from './ProductList.type';

const ProductList: React.FC<ProductListProps> = ({ list }) => (
  <Box
    sx={{
      display: 'flex',
      flexWrap: 'wrap',
      gap: '10px',
    }}
  >
    {list.map((product: TProduct) => (
      <ProductCard key={product.id} product={product} />
    ))}
  </Box>
);

export default ProductList;
