import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

if (typeof window !== 'undefined') {
  window.React = React;
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
