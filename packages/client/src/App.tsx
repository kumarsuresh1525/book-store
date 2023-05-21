import { ThemeProvider } from '@mui/material/styles';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Container from '@mui/material/Container';
import { Box } from '@mui/material';
import Header from '@shared/Header';
import { Provider } from 'react-redux';
import React from 'react';
import Home from './pages/Home';
import ErrorBoundary from './shared/ErrorBoundary';
import store from './store/index';

const router = createBrowserRouter([{ path: '/', element: <Home /> }]);

const Root = (): React.ReactElement => (
    <Box>
      <Header />
      <Container maxWidth="lg">
        <RouterProvider router={router} />
      </Container>
    </Box>
  );

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
