import React from 'react';
import ReactDOM from 'react-dom/client'; // Note the import change
import App from './App';
import './index.css'; // Include your CSS file

// Create a root for the app
const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

// Render the app
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
