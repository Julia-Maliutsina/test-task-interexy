import React from 'react';
import { FC } from 'react';

import Layout from '../../components/Layout';
import './style.scss';
import { CharacterInfo } from 'components/Character';

const DEFAULT_CARACTER = {
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
};
const caracter = DEFAULT_CARACTER;

const CharacterPage: FC = () => (
  <Layout pagename="character">
    <CharacterInfo
      id={caracter.id}
      name={caracter.name}
      status={caracter.status}
      species={caracter.species}
      type={caracter.type}
      gender={caracter.gender}
      origin={caracter.origin}
      location={caracter.location}
      image={caracter.image}
    />
  </Layout>
);

export default CharacterPage;
