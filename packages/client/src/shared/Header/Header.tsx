import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { useDispatch } from 'react-redux';
import { fetchBooks } from '@pages/Home/action';
import { createBrowserHistory } from 'history';
import { Search, SearchIconWrapper, StyledInputBase } from './Header.styled';

const Header = (): React.ReactElement => {
  const [searchInput, setSearchInput] = useState('');
  const dispatch = useDispatch();
  const history = createBrowserHistory();
  const handleChange = (evt: React.ChangeEvent<HTMLInputElement>): void => {
    setSearchInput(evt.target.value);
  };

  const handleSearch = (): void => {
    if (searchInput) {
      dispatch(fetchBooks(searchInput));
      history.push(`?search=${searchInput}`);
    }
  };
  return (
    <Box sx={{ flexGrow: 1, marginBottom: '80px' }}>
      <AppBar position="fixed">
        <Container sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between'
        }}>
          <Toolbar>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ display: { xs: 'none', sm: 'block' } }}
            >
              Book Store
            </Typography>
            <Search>
              <StyledInputBase
                value={searchInput}
                onChange={handleChange}
                placeholder="Search books by title, author"
              />
              <SearchIconWrapper onClick={handleSearch}>
                <SearchIcon />
              </SearchIconWrapper>
            </Search>
          </Toolbar>
          <Box display="flex" alignItems="center">
            <ShoppingCartOutlinedIcon />
            <Avatar sx={{ marginLeft: '15px', bgcolor: 'ActiveBorder' }}>S</Avatar>
          </Box>
        </Container>
      </AppBar>
    </Box>
  );
};

export default Header;
