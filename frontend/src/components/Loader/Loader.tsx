import React, { FC } from 'react';
import { CircularProgress, Box } from '@mui/material';

import './style.scss';

const Loader: FC = () => (
  <Box className="progress-wrapper">
    <CircularProgress className="progress" color="inherit" size="100px" />
  </Box>
);

export default Loader;
