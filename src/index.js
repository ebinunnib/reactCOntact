import React from 'react';
import ReactDOM from 'react-dom'; // Import ReactDOM correctly
import { BrowserRouter } from 'react-router-dom'; // Import BrowserRouter from react-router-dom
import './index.css';
import App from './App';
import './bootstrap.min.css';

const root = document.getElementById('root'); // No need to use ReactDOM.createRoot

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  root
);