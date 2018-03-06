import {call, put, takeLatest } from 'redux-saga/effects'
import {handleApiErrors} from '../lib/api-errors'
import {
  PROFILE_UPDATING,
  PROFILE_UPDATE_ERROR,
  PROFILE_UPDATE_SUCCESS
} from "./constants";

const pUpdUrl = `${process.env.REACT_APP_API_URL}/users`;


function pUpdApi(email, password, firstName, lastName, aboutMe){


  return fetch(pUpdUrl, {
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


function* signupFlow(action){
  try{
    const {email, password, firstName, lastName, aboutMe} = action;
    const response = yield call(pUpdApi, email, password, firstName, lastName, aboutMe);
    yield put({type: PROFILE_UPDATE_SUCCESS, response})
  } catch(error){
    yield put({type: PROFILE_UPDATE_ERROR, error})
  }
}

function* pUpdWatcher() {
  yield takeLatest(PROFILE_UPDATING, signupFlow)
}

export default pUpdWatcher;