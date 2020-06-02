import {fork} from 'redux-saga/effects'

import users from './users'

export default function* rootSaga() {
  yield fork(users)
}
