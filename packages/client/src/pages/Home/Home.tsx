import ProductList from '@shared/ProductList';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useAppSelector } from '@typings/redux.types';
import { Box } from '@mui/material';
import Loader from '@shared/Loader';
import Filters from '@shared/Filters';
import { fetchBooks } from './action';

const Home = (): React.ReactElement => {
  const { productList, loading } = useAppSelector((state) => state.home);
  const dispatch = useDispatch();
  const { location } = window;
  const isShowFilter = !!location.search;
  useEffect(() => {
    dispatch(fetchBooks());
  }, []);

  if (loading) return <Loader />;

  return (
    <Box display={isShowFilter ? 'flex' : 'block'}>
      {isShowFilter && <Filters />}
      <ProductList list={productList} />
    </Box>
  );
};

export default Home;
