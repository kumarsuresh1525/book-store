import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import React from 'react';

const Loader = (): React.ReactElement => (
    <Box sx={{ position: 'absolute', top: '50%', left: '50%' }}>
      <CircularProgress />
    </Box>
  );

export default Loader;
