import {combineReducers} from 'redux'
import {History} from 'history'
import {connectRouter} from 'connected-react-router'

import UsersReducer from './users'
import SearchReducer from './search'
import {StoreState} from './state'

const rootReducer = (history: History) =>
  combineReducers<StoreState>({
    router: connectRouter(history),
    users: UsersReducer,
    search: SearchReducer
  })

export default rootReducer
