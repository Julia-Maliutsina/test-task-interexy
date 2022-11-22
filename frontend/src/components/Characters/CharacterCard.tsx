import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardMedia, CardContent, Typography } from '@mui/material';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

import { ICharacter } from 'interfaces/Character';
import './style.scss';
import { STATUSES } from 'constants/statuses';

const CharacterCard: FC<ICharacter> = ({ id, name, status, species, origin, location, image }) => (
  <Card className="character-card">
    <Link to={`${id}`}>
      <CardMedia
        className="character-card-img"
        component="img"
        height="140"
        image={`${image}`}
        alt="green iguana"
      />
      <CardContent className="character-card-content">
        <Typography className="character-name">{name}</Typography>
        <Typography className="character-status">
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
        <Typography className="character-title">Last known location:</Typography>
        <Typography className="character-info">{location.name}</Typography>
        <Typography className="character-title">First seen in:</Typography>
        <Typography className="character-info">{origin.name}</Typography>
      </CardContent>
    </Link>
  </Card>
);

export default CharacterCard;
