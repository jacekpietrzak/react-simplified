import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { ErrorBoundry } from './ErrorBoundry.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <ErrorBoundry fallback={<h1>Error</h1>}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ErrorBoundry>
);
