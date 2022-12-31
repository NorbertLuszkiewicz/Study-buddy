import React from 'react';
import ReactDOM from 'react-dom';
import Root from 'views/Root/Root.js';
import 'assets/styles/fonts.css';
import AppProviders from 'providers/AppProviders.js';

ReactDOM.render(
  <React.StrictMode>
    <AppProviders>
      <Root />
    </AppProviders>
  </React.StrictMode>,
  document.getElementById('root')
);
