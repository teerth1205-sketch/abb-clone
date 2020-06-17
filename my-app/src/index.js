import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import manageListing from './reducers/manageListing.js'

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
const store = createStore(manageListing, composeWithDevTools(applyMiddleware(thunk)))


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
document.getElementById('root')
)