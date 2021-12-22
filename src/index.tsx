import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';
import { createStore } from 'redux';
import indexReducer from './store/reducers/index.reducer';
import {BrowserRouter} from 'react-router-dom'

if (typeof window !== 'undefined') {
  window.React = React;
}

const store = createStore(indexReducer)

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
