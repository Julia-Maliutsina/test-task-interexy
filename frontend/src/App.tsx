import React from 'react';
import { FC } from 'react';
import reduxStore from './store/store';
import { Provider as ReduxStoreProvider } from 'react-redux';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import './App.scss';
import { CharactersPage, CharacterPage } from './pages';

const App: FC = () => (
  <ReduxStoreProvider store={reduxStore}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate replace to="characters" />} />
        <Route path="/characters">
          <Route index element={<CharactersPage />} />
          <Route path=":characterId" element={<CharacterPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </ReduxStoreProvider>
);

export default App;
