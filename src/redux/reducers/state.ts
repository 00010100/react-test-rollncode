import {UsersState} from './users'
import {SearchState} from './search'

export interface StoreState {
  router: any
  users: UsersState
  search: SearchState
}
