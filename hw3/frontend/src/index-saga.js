import SignupSaga from './signup/sagas'


export default function* IndexSage(){
  yield[
    SignupSaga(),
  ]
}