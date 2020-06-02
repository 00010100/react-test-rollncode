import {fork} from 'redux-saga/effects'
import {fetchUsersFork} from './users'

export default function* () {
  yield fork(fetchUsersFork)
}
