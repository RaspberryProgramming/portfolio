import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { applyMiddleware, compose } from 'redux';
import { configureStore } from '@reduxjs/toolkit'
import { thunk } from 'redux-thunk';

import App from './components/App';
import reducers from './reducers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = configureStore({reducer: reducers}, composeEnhancers(applyMiddleware(thunk)));
const container = document.getElementById('root');

createRoot(container).render(
  <Provider store={store}>
    <App/>
  </Provider>
);
