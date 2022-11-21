import React from 'react';
import { FC } from 'react';
import { Box } from '@mui/material';

import Layout from '../../components/Layout';
import './style.scss';

interface CaracterProps {
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

const CaracterPage: FC = () => (
  <Layout pagename="caracter">
    <Box>Caracter</Box>
  </Layout>
);

export default CaracterPage;
