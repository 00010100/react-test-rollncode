import {createAction} from 'redux-actions'
import {SearchType} from 'src/redux/constants'

const search = createAction<string>(SearchType.SEARCH)

export const SearchActions = {
  Type: SearchType,
  search
}

export type SearchActions = Omit<typeof SearchActions, 'Type'>
