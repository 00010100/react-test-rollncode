import React from 'react'
import {createStyles, makeStyles, Theme} from '@material-ui/core/styles'
import {Button} from '@material-ui/core/'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    check: {
      backgroundColor: theme.palette.success.main,
      color: theme.palette.common.white
    },
    unCheck: {
      backgroundColor: theme.palette.error.main,
      color: theme.palette.common.white
    }
  })
)

interface Props {
  status: boolean
  onClick: () => void
}

const StatusButton = ({status, onClick}: Props) => {
  const classes = useStyles()

  return (
    <Button variant="contained" className={status ? classes.unCheck : classes.check} onClick={onClick}>
      {status ? 'Unchecked' : 'Checked'}
    </Button>
  )
}

export default StatusButton
