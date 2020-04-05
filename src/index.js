import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Logger from 'js-logger';
import { Provider } from 'react-redux';
import store from './store';
import { setMyCounter } from './actions';

Logger.useDefaults();
//set to 15
store.dispatch(setMyCounter(0xf));

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}> <App /></Provider>
  </React.StrictMode>,
  document.getElementById('jonathan-r-gee')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
