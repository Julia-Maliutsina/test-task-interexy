import { FC } from 'react';
import { Box, Typography } from '@mui/material';

import { IUser } from 'interfaces/User';

import './style.scss';

const UserInfo: FC<IUser> = ({ id, name, surname, email, birth, gender, location, createdAt }) => (
  <Box className="user">
    <Typography component="h4" className="user-name">
      {name} {surname}
    </Typography>
    <Box className="info-wrapper">
      <Typography className="title">Gender:</Typography>
      <Typography className="info">{gender}</Typography>
    </Box>
    <Box className="info-wrapper">
      <Typography className="title">Date of birth:</Typography>
      <Typography className="info">{birth}</Typography>
    </Box>
    <Box className="info-wrapper">
      <Typography className="title">Email:</Typography>
      <Typography className="info">{email}</Typography>
    </Box>
    <Box className="info-wrapper">
      <Typography className="title">Location:</Typography>
      <Typography className="info">{location}</Typography>
    </Box>
    <Box className="info-wrapper">
      <Typography className="title">Date of registration:</Typography>
      <Typography className="info">{`${createdAt}`}</Typography>
    </Box>
  </Box>
);

export default UserInfo;
