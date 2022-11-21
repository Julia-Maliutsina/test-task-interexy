import React from 'react';
import { FC } from 'react';
import { Box } from '@mui/material';

import Layout from '../../components/Layout';
import './style.scss';

interface Caracter {
  id: Number;
  name: String;
  status: String;
  species: String;
  origin: {
    name: String;
    url: String;
  };
  location: {
    name: String;
    url: String;
  };
  episode: Array<string>;
  url: String;
  type?: String;
  gender?: String;
  image?: String;
  created?: Date;
}

interface CaractersProps {
  caracters?: Array<Caracter>;
}

const CaractersPage: FC<CaractersProps> = () => (
  <Layout pagename="caracters">
    <Box>Caracters</Box>
  </Layout>
);

export default CaractersPage;
