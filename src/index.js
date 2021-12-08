import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducers';
import App from './components/App';
import { BrowserRouter as Router } from 'react-router-dom';
import './index.css';
import favoritesReducer from './reducers/favoritesReducer';



const store = createStore(combineReducers({reducer, favoritesReducer}))

ReactDOM.render(
<Provider store={store} >
  <Router>
      <App />
  </Router>
  </Provider>,
  document.getElementById('root')
);
