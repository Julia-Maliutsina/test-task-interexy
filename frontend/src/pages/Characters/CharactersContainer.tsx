import React, { useEffect, useState } from 'react';
import { FC } from 'react';
import { useSelector } from 'react-redux';
import { redirect } from 'react-router-dom';

import { RootState, useAppDispatch } from 'store/store';
import { fetchAllCharacters } from 'store/charactersSlice';

import CharactersPage from './Characters';

const CharactersContainer: FC = ({}) => {
  const { isLoading, characters, pages, error } = useSelector(
    (state: RootState) => state.charactersReducer,
  );
  const [page, setPage] = useState(1);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchAllCharacters(page));
  }, [dispatch, page]);

  const fetchNextPage = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };
  if (error.status) {
    redirect('/user');
  }

  return (
    <CharactersPage
      characters={characters}
      pages={pages}
      page={page}
      fetchNextPage={fetchNextPage}
      isLoading={isLoading}
      error={error}
    />
  );
};

export default CharactersContainer;
