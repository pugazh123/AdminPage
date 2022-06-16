import React from 'react';
import ReactDOM from 'react-dom/client';



import { BrowserRouter } from 'react-router-dom';
import Admin from './Admin';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <React.StrictMode>
    <Admin />
  </React.StrictMode>
  </BrowserRouter>
);

