import ProductList from '@shared/ProductList';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useAppSelector } from '@typings/redux.types';
import { Box } from '@mui/material';
import Loader from '@shared/Loader';
import { fetchBooks } from './action';

const Home = (): React.ReactElement => {
  const { productList, loading } = useAppSelector((state) => state.home);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBooks());
  }, []);

  if (loading) return <Loader />;

  return (
    <Box>
      <ProductList list={productList} />
    </Box>
  );
};

export default Home;
