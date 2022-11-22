import React, { FC, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { fetchOneCharacter } from 'store/charactersSlice';
import { RootState, useAppDispatch } from 'store/store';

import CharacterPage from './Character';

const CharacterContainer: FC = () => {
  const { isLoading, character } = useSelector((state: RootState) => state.charactersReducer);

  let { characterId } = useParams();
  const dispatch = useAppDispatch();
  useEffect(() => {
    if (characterId) {
      dispatch(fetchOneCharacter(characterId));
    }
  }, [characterId, dispatch]);

  return <CharacterPage character={character} isLoading={isLoading} />;
};

export default CharacterContainer;
