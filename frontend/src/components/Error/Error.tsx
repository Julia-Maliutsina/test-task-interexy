import React, { FC } from 'react';
import { Typography, Box } from '@mui/material';

import { IError } from 'interfaces/Error';

import './style.scss';

const Loader: FC<IError> = ({ status, message }) => (
  <Box className="error">
    <Typography className="error-status">{`${status}`}</Typography>
    <Typography className="error-message">{message}</Typography>
  </Box>
);

export default Loader;
