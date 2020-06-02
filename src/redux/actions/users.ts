import {createAction} from 'redux-actions'
import {User} from 'src/models'
import {UsersType} from 'src/redux/constants'

const setUsers = createAction<{users: User[]; page: number}>(UsersType.SET_USERS)
const getUsers = createAction<number>(UsersType.GET_USERS)
const setLoading = createAction<boolean>(UsersType.SET_LOADING)
const toggleCheck = createAction<string>(UsersType.TOGGLE_CHECK)
const loadMore = createAction(UsersType.LOAD_MORE)
const setError = createAction(UsersType.SET_ERROR)
const resetError = createAction(UsersType.RESET_ERROR)

export const UsersActions = {
  Type: UsersType,
  getUsers,
  setLoading,
  toggleCheck,
  loadMore,
  setUsers,
  setError,
  resetError
}

export type UsersActions = Omit<typeof UsersActions, 'Type'>
