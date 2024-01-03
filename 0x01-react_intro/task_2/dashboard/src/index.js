import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Notifications from './Notifications';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <React.StrictMode>
      <App />
    </React.StrictMode>
    <div id="root-notifications">
      <Notifications />
    </div>
  </>
);

reportWebVitals();
