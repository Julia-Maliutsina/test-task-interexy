import React from 'react';
import { FC } from 'react';
import { Grid } from '@mui/material';

import Layout from '../../components/Layout';
import './style.scss';
import { Caracter } from 'interfaces/Caracter';
import { CaracterCard } from 'components/Caracters';

interface CaractersProps {
  caracters?: Array<Caracter>;
}

const DEFAULT_CARACTERS = [
  {
    id: 2,
    name: 'Morty Smith',
    status: 'Alive',
    species: 'Human',
    type: '',
    gender: 'Male',
    origin: {
      name: 'unknown',
      url: '',
    },
    location: {
      name: 'Citadel of Ricks',
      url: 'https://rickandmortyapi.com/api/location/3',
    },
    image: 'https://rickandmortyapi.com/api/character/avatar/2.jpeg',
  },
  {
    id: 1,
    name: 'Rick Sanchez',
    status: 'Alive',
    species: 'Human',
    type: '',
    gender: 'Male',
    origin: {
      name: 'Earth (C-137)',
      url: 'https://rickandmortyapi.com/api/location/1',
    },
    location: {
      name: 'Citadel of Ricks',
      url: 'https://rickandmortyapi.com/api/location/3',
    },
    image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
  },
];

const CaractersPage: FC<CaractersProps> = () => (
  <Layout pagename="caracters">
    <Grid container spacing={2} className="caracters-grid">
      {DEFAULT_CARACTERS.map((caracter) => (
        <Grid className="caracters-grid-item" item xs={6} key={caracter.id}>
          <CaracterCard
            id={caracter.id}
            name={caracter.name}
            status={caracter.status}
            species={caracter.species}
            origin={caracter.origin}
            location={caracter.location}
            image={caracter.image}
          />
        </Grid>
      ))}
    </Grid>
  </Layout>
);

export default CaractersPage;
