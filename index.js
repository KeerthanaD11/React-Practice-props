import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.js';
import './App.css'
/*import Footer from './Footer';
import Body from './Body';*/
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App name='Keerthana' age={19} isStudent={true}/>
    <App name='Devatha' age={13} isStudent={true}/>
    <App name='Kaviyazhini' age={2} isStudent={false}/>
  
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
