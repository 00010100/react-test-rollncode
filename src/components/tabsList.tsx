import React, {useState, useEffect, memo} from 'react'
import {connect, ConnectedProps} from 'react-redux'
import {makeStyles, Theme} from '@material-ui/core/styles'
import {Box, Tab, Tabs, AppBar} from '@material-ui/core'

import {UsersList, LoadingButton} from 'src/components'
import {StoreState} from 'src/redux/reducers/state'
import useBackendErrorBar from 'src/hooks/useBackendErrorBar'
import {UsersActions} from 'src/redux/actions'
import {getCheckedUsers, getUsers, getPage, getPrevPage, getIsLoading, getError} from 'src/selectors/users'
import BackendErrorMessage from './backendErrorMessage'

interface TabPanelProps {
  children?: React.ReactNode
  index: any
  value: any
}

function TabPanel(props: TabPanelProps) {
  const {children, value, index, ...other} = props

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </div>
  )
}

function a11yProps(index: any) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`
  }
}

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper
  }
}))

const connector = connect(
  (state: StoreState) => ({
    users: getUsers(state),
    checkedUsers: getCheckedUsers(state),
    isLoading: getIsLoading(state),
    page: getPage(state),
    prevPage: getPrevPage(state),
    error: getError(state)
  }),
  {
    getUsers: (payload: number) => UsersActions.getUsers(payload),
    loadMore: () => UsersActions.loadMore(),
    toggleCheck: (payload: string) => UsersActions.toggleCheck(payload),
    resetError: () => UsersActions.resetError()
  }
)

type PropsFromRedux = ConnectedProps<typeof connector>

const TabsList = memo(
  ({getUsers, isLoading, prevPage, error, resetError, page, users, checkedUsers, loadMore, toggleCheck}: PropsFromRedux) => {
    const classes = useStyles()
    const [value, setValue] = useState(0)

    useEffect(() => {
      if (prevPage === page) return

      getUsers(page)
    }, [getUsers, prevPage, page])

    const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
      setValue(newValue)
    }

    const [closeErrorBar] = useBackendErrorBar(resetError)

    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
            <Tab label="List of Users" {...a11yProps(0)} />
            <Tab label="List of Checked Users" {...a11yProps(1)} />
          </Tabs>
        </AppBar>
        <TabPanel value={value} index={0}>
          <UsersList users={users} toggleCheck={toggleCheck} />
          <Box justifyContent="center" display="flex">
            <LoadingButton variant="contained" color="primary" onClick={loadMore} disabled={isLoading}>
              Load More
            </LoadingButton>
          </Box>
        </TabPanel>
        <TabPanel value={value} index={1}>
          <UsersList users={checkedUsers} toggleCheck={toggleCheck} />
        </TabPanel>
        <BackendErrorMessage error={error as string} onClose={closeErrorBar} />
      </div>
    )
  }
)

export default connector(TabsList)
