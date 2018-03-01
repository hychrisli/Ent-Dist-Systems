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


//Set up middleware
const sagMiddleware = createSageMiddleware();


// redux store
const store = createStore(
    applyMiddleware(sagMiddleware),
);

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Route path={"/"} component={App}>
        <Route path={"/login"} component={Login} />
        <Route path={"/signup"} component={Signup}/>
        <Route path={"/widgets"} component={Widgets}/>
      </Route>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);

