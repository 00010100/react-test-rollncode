import React from 'react'
import {makeStyles, Theme, createStyles} from '@material-ui/core/styles'
import {List, Grid, Typography} from '@material-ui/core'

import {User} from 'src/models'
import {UserItem, SearchInput} from 'src/components'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      maxWidth: 1000,
      margin: '0 auto'
    },
    demo: {
      backgroundColor: theme.palette.background.paper
    },
    title: {
      margin: theme.spacing(4, 0, 2)
    },
    empty: {
      margin: theme.spacing(2, 0),
      textAlign: 'center'
    }
  })
)

interface Props {
  users: User[]
  toggleCheck: (id: string) => void
}

const UsersList = ({users, toggleCheck}: Props) => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <div className={classes.demo}>
            <SearchInput />
            {!users.length && <Typography className={classes.empty}>Not users yet</Typography>}
            <List>
              {users.map(user => (
                <UserItem key={user.id} user={user} toggleCheck={toggleCheck} />
              ))}
            </List>
          </div>
        </Grid>
      </Grid>
    </div>
  )
}

export default UsersList
