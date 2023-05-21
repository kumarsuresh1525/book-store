import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { TProduct } from '@shared/ProductList/ProductList.type';
import { Divider } from '@mui/material';

type Props = {
  product: TProduct;
};

const ProductCard: React.FC<Props> = ({ product }) => (
    <Card sx={{ width: 250, padding: '15px' }}>
      <CardMedia
        sx={{ height: 200, backgroundSize: 'contain' }}
        image={product.imgUrl}
        title="green iguana"
      />
      <CardContent>
        <Typography
          sx={{
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap',
          }}
          gutterBottom
          variant="subtitle2"
          component="div"
        >
          {product.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          by
{' '}
{product.author}
        </Typography>
      </CardContent>
      <CardActions sx={{ display: 'block' }}>
        <Rating value={product.rating} max={5} readOnly />
        <Typography color="rgb(46, 50, 146)">
₹
{product.price}
        </Typography>
        <Divider />
        <Button fullWidth sx={{ marginTop: '10px' }} variant="contained" color="secondary">Add to Cart</Button>
      </CardActions>
    </Card>
  );

export default ProductCard;
