import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardMedia, CardContent, Typography } from '@mui/material';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

import { ICaracter } from 'interfaces/Caracter';
import './style.scss';
import { STATUSES } from 'constants/statuses';

const CaracterCard: FC<ICaracter> = ({ id, name, status, species, origin, location, image }) => (
  <Card className="caracter-card">
    <Link to={`${id}`}>
      <CardMedia
        className="caracter-card-img"
        component="img"
        height="140"
        image={`${image}`}
        alt="green iguana"
      />
      <CardContent className="caracter-card-content">
        <Typography className="caracter-name">{name}</Typography>
        <Typography className="caracter-status">
          <FiberManualRecordIcon
            className="status-icon"
            fontSize="inherit"
            color={
              STATUSES.alive === status
                ? 'primary'
                : status === STATUSES.dead
                ? 'secondary'
                : 'disabled'
            }
          />
          {status} - {species}
        </Typography>
        <Typography className="caracter-title">Last known location:</Typography>
        <Typography className="caracter-info">{location.name}</Typography>
        <Typography className="caracter-title">First seen in:</Typography>
        <Typography className="caracter-info">{origin.name}</Typography>
      </CardContent>
    </Link>
  </Card>
);

export default CaracterCard;
