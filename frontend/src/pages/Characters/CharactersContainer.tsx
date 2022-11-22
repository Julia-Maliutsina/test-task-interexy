import React, { useEffect, useState } from 'react';
import { FC } from 'react';
import { useSelector } from 'react-redux';

import { RootState, useAppDispatch } from 'store/store';
import { fetchAllCharacters } from 'store/charactersSlice';

import CharactersPage from './Characters';

const CharactersContainer: FC = ({}) => {
  const { isLoading, characters, pages } = useSelector(
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

  return (
    <CharactersPage
      characters={characters}
      pages={pages}
      page={page}
      fetchNextPage={fetchNextPage}
      isLoading={isLoading}
    />
  );
};

export default CharactersContainer;
