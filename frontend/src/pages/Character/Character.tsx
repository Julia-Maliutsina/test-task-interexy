import React, { FC, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

import Layout from '../../components/Layout';
import './style.scss';
import { CharacterInfo } from 'components/Character';
import { fetchOneCharacter } from 'store/charactersSlice';
import { RootState, useAppDispatch } from 'store/store';

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

const CharacterPage: FC = () => {
  const { isLoading, character } = useSelector((state: RootState) => state.charactersReducer);

  let { characterId } = useParams();
  const dispatch = useAppDispatch();
  useEffect(() => {
    if (characterId) {
      dispatch(fetchOneCharacter(characterId));
    }
  }, [characterId, dispatch]);

  return (
    <Layout pagename="character">
      {character && (
        <CharacterInfo
          id={character.id}
          name={character.name}
          status={character.status}
          species={character.species}
          type={character.type}
          gender={character.gender}
          origin={character.origin}
          location={character.location}
          image={character.image}
        />
      )}
    </Layout>
  );
};

export default CharacterPage;
