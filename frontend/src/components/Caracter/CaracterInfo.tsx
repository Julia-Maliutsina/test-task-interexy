import React, { FC } from 'react';
import { Box, Container, Paper, Typography } from '@mui/material';

import { ICaracter } from 'interfaces/Caracter';
import './style.scss';

const CaracterInfo: FC<ICaracter> = ({
  id,
  name,
  status,
  species,
  type,
  gender,
  origin,
  location,
  image,
}) => (
  <Box className="caracter-info">
    <Paper className="avatar">
      <img src={`${image}`} />
    </Paper>
    <Typography className="name">{name}</Typography>
    <Box className="info-wrapper">
      <Box className="main-info">
        <Box>
          <Typography className="title">Status:</Typography>
          <Typography className="info">{status}</Typography>
        </Box>
        <Box>
          <Typography className="title">Species:</Typography>
          <Typography className="info">
            {species} {type && `- ${type}`}
          </Typography>
        </Box>
        <Box>
          <Typography className="title">Gender:</Typography>
          <Typography className="info">{gender || 'Unknown'}</Typography>
        </Box>
      </Box>
      <Box className="location-info">
        <Typography className="title">Last known location</Typography>
        <Typography className="info">{location.name || 'Unknown'}</Typography>
        <Typography className="title">First seen in</Typography>
        <Typography className="info">{origin.name || 'Unknown'}</Typography>
      </Box>
    </Box>
  </Box>
);

export default CaracterInfo;
