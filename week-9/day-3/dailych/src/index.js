import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { createStore, combineReducers , applyMiddleware  } from 'redux';
import logger from 'redux-logger'
import thunk from 'redux-thunk'
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { searchRobots, requestRobots } from './redux/redusers';
import 'tachyons';


const rootReducers = combineReducers({searchRobots, requestRobots})
const store = createStore(rootReducers, applyMiddleware(thunk, logger));

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
   
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
