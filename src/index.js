import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { applyMiddleware, compose } from 'redux';
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import reduxThunk from 'redux-thunk';

import App from './components/App';
import reducers from './reducers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = configureStore({
  reducer: reducers,
  middleware: getDefaultMiddleware({
    serializableCheck: false
  })
}, composeEnhancers(applyMiddleware(reduxThunk)));
const container = document.getElementById('root');

createRoot(container).render(
  <Provider store={store}>
    <App/>
  </Provider>
);
