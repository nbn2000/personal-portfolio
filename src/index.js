import * as ReactDOMClient from 'react-dom/client';
import React from 'react';
import App from './App'
import './index.css'

const root = ReactDOMClient.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)