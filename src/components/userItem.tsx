import React from 'react'
import {useHistory} from 'react-router-dom'
import {ListItem, Checkbox, ListItemAvatar, Avatar, ListItemText, ListItemSecondaryAction} from '@material-ui/core'

import {User} from 'src/models'

interface Props {
  user: User
  toggleCheck: (id: string) => void
}

const UserItem = ({user, toggleCheck}: Props) => {
  const {id, fullname, checked, avatar} = user
  const history = useHistory()

  const toPage = (user: User) => {
    history.push(`/user/${user.id}`, {user})
  }

  return (
    <ListItem key={id} button onClick={toPage.bind(null, user)}>
      <ListItemAvatar>
        <Avatar src={avatar} alt={avatar} />
      </ListItemAvatar>
      <ListItemText id={id} primary={fullname} secondary={id} />
      <ListItemSecondaryAction>
        <Checkbox edge="end" onChange={() => toggleCheck(id)} checked={checked} inputProps={{'aria-labelledby': id}} />
      </ListItemSecondaryAction>
    </ListItem>
  )
}

export default UserItem
