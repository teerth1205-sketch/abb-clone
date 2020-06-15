import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import manageListing from './reducers/manageListing.js'

import { Provider } from 'react-redux';
import { createStore } from 'redux';

const store = createStore(manageListing)


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
document.getElementById('root')
)