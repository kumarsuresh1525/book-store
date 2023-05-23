import { ThemeProvider } from '@mui/material/styles';
import { RouterProvider } from 'react-router-dom';
import Container from '@mui/material/Container';
import { Box } from '@mui/material';
import Header from '@shared/Header';
import { Provider } from 'react-redux';
import React from 'react';
import ErrorBoundary from './shared/ErrorBoundary';
import store from './store/index';
import router from './routes';

const Root = (): React.ReactElement => {
  const { location } = window;
  return (
    <Box>
      {!location.pathname.includes('/login') && <Header />}
      <Container maxWidth="lg">
        <RouterProvider router={router} />
      </Container>
    </Box>
  );
};

const App = (): React.ReactElement => (
    <ThemeProvider theme={{}}>
      <ErrorBoundary>
        <Provider store={store}>
          <Root />
        </Provider>
      </ErrorBoundary>
    </ThemeProvider>
  );

export default App;
