import SignupSaga from './signup/sagas'
import LoginSaga from './login/sagas'
import pUpdSaga from './profile/sagas'


export default function* IndexSage(){
  yield[
    SignupSaga(),
    LoginSaga(),
    pUpdSaga()
  ]
}