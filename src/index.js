import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { StoreProvider } from '../src/store/StoreProvider';
import { initialState, dialogReducer } from '../src/store/DialogReducer';
import Home from './pages/index';

ReactDOM.render(
  <React.StrictMode>
    <StoreProvider initialState={initialState} reducer={dialogReducer}>
      <Home />
    </StoreProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
