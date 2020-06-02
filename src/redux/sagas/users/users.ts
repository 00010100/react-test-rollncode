import {call, put, takeLatest} from 'redux-saga/effects'

import api from 'src/redux/sagas/api'
import {UsersActions} from 'src/redux/actions'
import {prepareUsers} from 'src/utils'

function* fetchUsers({payload}: any) {
  try {
    yield put(UsersActions.setLoading(true))
    const result = yield call(api.get, `?results=20&page=${payload}&seed=abc`)

    const data = {
      users: prepareUsers(result.data.results),
      page: result.data.info.page
    }

    yield put(UsersActions.setUsers(data))
    yield put(UsersActions.setLoading(false))
  } catch (error) {
    yield put(UsersActions.setError(error.message || error.error || 'Something wrong'))
    yield put(UsersActions.setLoading(false))
  }
}

export function* fetchUsersFork() {
  yield takeLatest(UsersActions.Type.GET_USERS, fetchUsers)
}
