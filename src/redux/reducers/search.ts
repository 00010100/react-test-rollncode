import {handleActions} from 'redux-actions'
import {SearchActions} from 'src/redux/actions'

export class SearchState {
  value: string = ''
}

export default handleActions<SearchState, any>(
  {
    [SearchActions.Type.SEARCH]: (state: SearchState, {payload}: any) => ({
      ...state,
      value: payload
    })
  },
  new SearchState()
)
