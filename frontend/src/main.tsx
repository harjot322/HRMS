import React, { StrictMode } from 'react'; // Import React and StrictMode
import { createRoot } from 'react-dom/client';
import App from './App'; // Ensure this file exists
import './index.css';
import { AuthProvider } from './context/AuthContext';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AuthProvider>
      <App />
    </AuthProvider>
  </StrictMode>
);
