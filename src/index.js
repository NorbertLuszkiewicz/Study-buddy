import React from 'react';
import { createRoot } from 'react-dom/client';
import Root from 'views/Root/Root.js';
import 'assets/styles/fonts.css';
import AppProviders from 'providers/AppProviders.js';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <AppProviders>
      <Root />
    </AppProviders>
  </React.StrictMode>
);
