import React, { useEffect } from 'react';
import { FC } from 'react';
import { Grid } from '@mui/material';
import { useSelector } from 'react-redux';

import Layout from '../../components/Layout';
import './style.scss';
import { ICharacter } from 'interfaces/Character';
import { CharacterCard } from 'components/Characters';
import { RootState, useAppDispatch } from 'store/store';
import { fetchAllCharacters } from 'store/charactersSlice';

const CharactersPage: FC = ({}) => {
  const { isLoading, characters } = useSelector((state: RootState) => state.charactersReducer);
  let page = 1;
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchAllCharacters(page));
  }, [dispatch, page]);
  return (
    <Layout pagename="characters">
      <Grid container spacing={2} className="characters-grid">
        {characters?.map((character) => (
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
    </Layout>
  );
};

export default CharactersPage;
