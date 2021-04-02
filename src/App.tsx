import React from 'react';
import { GlobalStyle } from './styles';
import { HomePage } from 'pages';
import { StoreProvider } from 'store';

export const App = () => (
  <StoreProvider>
    <GlobalStyle />
    <HomePage />
  </StoreProvider>
);
