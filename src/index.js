import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Logger from 'js-logger';
import { Provider } from 'react-redux';
import store from './store';
import io from "socket.io-client";
import { updateChatLog } from './actions';

Logger.useDefaults();

const socket = io();

// listen for server events and dispatch.
socket.on('onchatlog', ({msg}) => store.dispatch(updateChatLog(msg)));


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
