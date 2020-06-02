import {handleActions} from 'redux-actions'
import {map, concat, add} from 'ramda'

import {User} from 'src/models'
import {UsersActions} from 'src/redux/actions'

export class UsersState {
  page: number = 1
  prevPage: number = 0
  users: User[] | [] = []
  error: string | null = null
  isLoading = false
}

export default handleActions<UsersState, any>(
  {
    [UsersActions.Type.SET_USERS]: (state: UsersState, {payload}: any) => ({
      ...state,
      page: payload.page,
      prevPage: payload.page,
      users: concat(state.users, payload.users),
      error: null
    }),
    [UsersActions.Type.LOAD_MORE]: (state: UsersState) => ({
      ...state,
      page: add(state.page, 1),
      prevPage: state.page
    }),
    [UsersActions.Type.TOGGLE_CHECK]: (state: UsersState, {payload}: any) => ({
      ...state,
      users: map(user => {
        if (user.id !== payload) return user

        return {...user, checked: !user.checked}
      }, state.users)
    }),
    [UsersActions.Type.SET_LOADING]: (state: UsersState, {payload}: any) => ({
      ...state,
      isLoading: payload
    }),

    [UsersActions.Type.SET_ERROR]: (state: UsersState, {payload}: any) => ({
      ...state,
      error: payload
    }),
    [UsersActions.Type.RESET_ERROR]: (state: UsersState) => ({
      ...state,
      error: null
    })
  },
  new UsersState()
)
