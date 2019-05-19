import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import * as firebase from 'firebase';

import { Provider } from 'react-redux'


const config = {
  apiKey: "AIzaSyCCwSylL5Y4Hbx7qqP5Exy5XkaZgbqlpj4",
  authDomain: "raret-757bc.firebaseapp.com",
  databaseURL: "https://raret-757bc.firebaseio.com",
  projectId: "raret-757bc",
  storageBucket: "raret-757bc.appspot.com",
  messagingSenderId: "319151121508",
  appId: "1:319151121508:web:256d54de5314c80c"
}
firebase.initializeApp(config);

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
