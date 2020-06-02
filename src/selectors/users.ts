import {StoreState} from 'src/redux/reducers/state'
import {filterUsers} from 'src/utils'

export const getUsers = ({users, search}: StoreState) => filterUsers(users.users, search.value)
export const getCheckedUsers = ({users, search}: StoreState) =>
  filterUsers(
    users.users.filter(user => user.checked),
    search.value
  )
export const getPrevPage = ({users}: StoreState) => users.prevPage
export const getPage = ({users}: StoreState) => users.page
export const getIsLoading = ({users}: StoreState) => users.isLoading
export const getError = ({users}: StoreState) => users.error
