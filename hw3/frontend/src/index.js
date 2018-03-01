import React from 'react';
import ReactDOM from 'react-dom';
import {applyMiddleware, createStore, compose} from 'redux';
import {Provider} from 'react-redux';
import createSageMiddleware from 'redux-saga'
import {Router, Route} from 'react-router';
import {BrowserRouter} from 'react-router-dom';

import App from './App';
import Login from './login';
import Signup from './signup';
import Widgets from './widgets';
import './index.css';

import IndexReducer from './index-reducer'

//Set up middleware
const sagMiddleware = createSageMiddleware();


/*eslint-disable */
/*To use the redux devtool*/
const composeSetup = process.env.NODE_ENV !== 'production' && typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : compose;
/*eslint-enable */

// redux store
const store = createStore(
  IndexReducer,
  composeSetup(applyMiddleware(sagMiddleware)),
);

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Route path={"/"} component={App}>
        <Route path={"/login"} component={Login}/>
        <Route path={"/signup"} component={Signup}/>
        <Route path={"/widgets"} component={Widgets}/>
      </Route>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);

