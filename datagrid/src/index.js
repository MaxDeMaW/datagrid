import React from 'react';
import ReactDOM from 'react-dom';

import { createStore } from 'redux';
import { Provider } from 'react-redux';

import App from './components/app/App';
import reducer from './utils/reducer';

import './index.css';


import { devToolsEnhancer } from 'redux-devtools-extension';

const store = createStore(reducer, /* preloadedState, */ devToolsEnhancer(
  // Specify custom devTools options
));



// const store = createStore(reducer);








ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, document.getElementById('root')
);
