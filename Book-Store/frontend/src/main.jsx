import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { SnackbarProvider } from 'notistack';

// --- Add this at the top to create a unique user ID for each visitor ---
if (!localStorage.getItem('userId')) {
  const uniqueId = 'user-' + Date.now() + '-' + Math.floor(Math.random() * 10000);
  localStorage.setItem('userId', uniqueId);
}
// -------------------------------------------------------------------------

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <SnackbarProvider>
      <App />
    </SnackbarProvider>
  </BrowserRouter>
);
