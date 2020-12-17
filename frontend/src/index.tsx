import React from 'react';
import ReactDOM from 'react-dom';
import './styles/css/Index.css';
import { Provider } from 'react-redux'
import App from './App';
import store from './store';
import {saveState} from './store/localStorage'

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);


