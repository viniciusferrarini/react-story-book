import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AppView from './AppView';

// Importing the Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
  <React.StrictMode>
    <AppView />
  </React.StrictMode>,
  document.getElementById('root')
);