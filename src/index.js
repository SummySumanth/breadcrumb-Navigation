import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';
import { createLogger } from 'redux-logger';
import allReducers from './reducers/index';
import Routes from './routes';
import thunk from 'redux-thunk';
import './styles/index.scss';

const loggerMiddleware = createLogger({ predicate: () => ({ logger: console, diff: true }) });

const store = createStore(
  allReducers,
  applyMiddleware(thunk ,loggerMiddleware)
);

ReactDOM.render(
  <Provider store={store}>
    <Routes />
  </Provider>
  ,document.getElementById('root')
);
