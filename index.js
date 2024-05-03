import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.js';
import './App.css'
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App name='Keerthana' age={19} isStudent={true}/>
    <App name='Devatha' age={13} isStudent={true}/>
    <App name='Kaviyazhini' age={2} isStudent={false}/>
  
  </React.StrictMode>
);

reportWebVitals();
