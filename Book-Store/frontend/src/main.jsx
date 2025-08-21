import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { SnackbarProvider } from 'notistack';

// Ensure every user has a unique userId
if (!localStorage.getItem('userId')) {
  const uniqueId = 'user-' + Date.now() + '-' + Math.floor(Math.random() * 10000);
  localStorage.setItem('userId', uniqueId);
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <SnackbarProvider>
      <App />
    </SnackbarProvider>
  </BrowserRouter>
);
