import React from 'react';
import { FC } from 'react';
import { Grid, Pagination } from '@mui/material';

import Layout from 'components/Layout';
import Loader from 'components/Loader';
import { ICharacter } from 'interfaces/Character';
import { CharacterCard } from 'components/Characters';
import { IError } from 'interfaces/Error';

import './style.scss';
import Error from 'components/Error';

interface ICharactersProps {
  characters: ICharacter[];
  pages: number;
  page: number;
  fetchNextPage: (event: React.ChangeEvent<unknown>, value: number) => void;
  isLoading?: Boolean;
  error?: IError;
}

const CharactersPage: FC<ICharactersProps> = ({
  characters,
  pages,
  page,
  fetchNextPage,
  isLoading,
  error,
}) => (
  <Layout pageName="characters">
    {error?.status && <Error message={error.message} status={error.status} />}
    {isLoading && <Loader />}
    {!isLoading && characters && !error?.status && (
      <>
        <Grid container spacing={2} className="characters-grid">
          {characters.map((character) => (
            <Grid className="characters-grid-item" item xs={6} key={`character_${character.id}`}>
              <CharacterCard
                id={character.id}
                name={character.name}
                status={character.status}
                species={character.species}
                origin={character.origin}
                location={character.location}
                image={character.image}
              />
            </Grid>
          ))}
        </Grid>
        <Pagination
          className="characters-pagination"
          count={pages}
          page={page}
          onChange={fetchNextPage}
        />
      </>
    )}
  </Layout>
);

export default CharactersPage;
