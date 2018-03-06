import {call, put, takeLatest } from 'redux-saga/effects'
import {handleApiErrors} from '../lib/api-errors'
import {
  PROFILE_UPDATING,
  PROFILE_UPDATE_ERROR,
  PROFILE_UPDATE_SUCCESS,
  PROFILE_GETTING,
  PROFILE_GET_ERROR,
  PROFILE_GET_SUCCESS
} from "./constants";

const profileUrl = `${process.env.REACT_APP_API_URL}/users`;


function pUpdApi(email, password, firstName, lastName, aboutMe){
  return fetch(profileUrl, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({email, password, firstName, lastName, aboutMe}),
  })
    .then(handleApiErrors)
    .then(response => response.json())
    .then(json => json)
    .catch(error => {throw error})
}

function pGetApi(username) {
  return fetch(profileUrl + '/' + username, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    }
  })
    .then(handleApiErrors)
    .then(response => response.json())
    .then(json => json)
    .catch(error => {throw error})
}


function* pUpdFlow(action){
  try{
    const {email, password, firstName, lastName, aboutMe} = action;
    const response = yield call(pUpdApi, email, password, firstName, lastName, aboutMe);
    yield put({type: PROFILE_UPDATE_SUCCESS, response})
  } catch(error){
    yield put({type: PROFILE_UPDATE_ERROR, error})
  }
}

function* pGetFlow(action) {
  try{
    const {username} = action;
    const response = yield call(pGetApi, username);
    yield put({type: PROFILE_GET_SUCCESS, response})
  } catch(error) {
    yield put({type: PROFILE_GET_ERROR, error})
  }
}

export function* pUpdWatcher() {
  yield takeLatest(PROFILE_UPDATING, pUpdFlow)
}


export  function* pGetWatcher() {
  yield takeLatest(PROFILE_GETTING, pGetFlow)
}

