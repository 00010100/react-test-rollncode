import React from 'react'
import {pick} from 'ramda'
import {createStyles, makeStyles} from '@material-ui/core/styles'
import {TableContainer, Table, TableHead, TableRow, TableCell, Paper, TableBody, Avatar} from '@material-ui/core'

import {User} from 'src/models'
import {formatDate} from 'src/utils'

interface Props {
  user: User
}

const useStyles = makeStyles(() =>
  createStyles({
    table: {
      minWidth: 650
    }
  })
)

const UserDetails = ({user}: Props) => {
  const classes = useStyles()

  const row = pick(['avatar', 'fullname', 'gender', 'phone', 'email', 'dob', 'address'], user)

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="center">Avatar</TableCell>
            <TableCell align="center">FullName</TableCell>
            <TableCell align="center">Gender</TableCell>
            <TableCell align="center">Phone</TableCell>
            <TableCell align="center">Email</TableCell>
            <TableCell align="center">Date of Birthday</TableCell>
            <TableCell align="center">Address</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell align="center">
              <Avatar alt={row.avatar} src={row.avatar} />
            </TableCell>
            <TableCell align="center">{row.fullname}</TableCell>
            <TableCell align="center">{row.gender}</TableCell>
            <TableCell align="center">{row.phone}</TableCell>
            <TableCell align="center">{row.email}</TableCell>
            <TableCell align="center">{formatDate(row.dob)}</TableCell>
            <TableCell align="center">{row.address}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default UserDetails
