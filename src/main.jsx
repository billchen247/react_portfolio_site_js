import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx';
import './styles/index.css';

// Vite injects import.meta.env.BASE_URL from vite.config.js `base`. It always
// ends with a slash, but react-router's basename must NOT — strip it here so
// the same source works at `/` (Netlify) and `/react_portfolio_site_js/` (Pages).
const routerBasename = import.meta.env.BASE_URL.replace(/\/$/, '') || '/';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename={routerBasename}>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
