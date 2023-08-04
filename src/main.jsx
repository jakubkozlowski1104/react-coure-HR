import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './views/Root/Root';
import { worker } from './mocks/browser.jsx';

worker.start().then(() => {
  ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
});
