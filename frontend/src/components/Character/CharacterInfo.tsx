import React, { FC } from 'react';
import { Box, Paper, Typography } from '@mui/material';

import { ICharacter } from 'interfaces/Character';
import './style.scss';

const CharacterInfo: FC<ICharacter> = ({
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
  <Box className="character-info">
    <Paper className="avatar">
      <img src={`${image}`} alt={`${name}`} />
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
          <Typography className="info">{species}</Typography>
        </Box>
        <Box>
          <Typography className="title">Type:</Typography>
          <Typography className="info">{type || 'Unknown'}</Typography>
        </Box>
        <Box>
          <Typography className="title">Gender:</Typography>
          <Typography className="info">{gender || 'Unknown'}</Typography>
        </Box>
      </Box>
      <Box className="location-info">
        <Typography className="title">Last known location</Typography>
        <Typography className="info">{location?.name || 'Unknown'}</Typography>
        <Typography className="title">First seen in</Typography>
        <Typography className="info">{origin?.name || 'Unknown'}</Typography>
      </Box>
    </Box>
  </Box>
);

export default CharacterInfo;
