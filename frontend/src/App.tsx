import React from 'react';
import { FC } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import './App.scss';
import { Caracters, Caracter } from './pages';

const App: FC = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Navigate replace to="caracters" />} />
      <Route path="/caracters">
        <Route index element={<Caracters />} />
        <Route path=":caracterId" element={<Caracter />} />
      </Route>
    </Routes>
  </BrowserRouter>
);

export default App;
