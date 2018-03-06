import SignupSaga from './signup/sagas'
import LoginSaga from './login/sagas'
import {pUpdWatcher, pGetWatcher} from './profile/sagas'


export default function* IndexSage(){
  yield[
    SignupSaga(),
    LoginSaga(),
    pUpdWatcher(),
    pGetWatcher()
  ]
}