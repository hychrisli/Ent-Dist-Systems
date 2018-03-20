import {CLIENT_UNSET} from '../client/constants'

import history from "../history";
import {takeLatest, call} from "redux-saga/effects";
import {handleApiErrors} from "../lib/api-errors";

const logoutUrl = `${process.env.REACT_APP_API_URL}/sess/logout`;

function logoutApi() {
  return fetch(logoutUrl, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
    credentials: 'include',
  })
    .then(handleApiErrors)
    .then(response => {
      return response.json()})
    .then(json => json)
    .catch(error => {
      throw error
    })
}

function* logout(){
  console.log('here I am');
  yield call(logoutApi);
  localStorage.removeItem('token');
  history.push('/login')
}

function* logoutWatcher(){
  yield takeLatest(CLIENT_UNSET, logout)
}

export default logoutWatcher;
