import React from 'react'
import {useLocation, useHistory} from 'react-router-dom'
import {createStyles, makeStyles, Theme} from '@material-ui/core/styles'
import {Paper, IconButton, Typography} from '@material-ui/core'
import ArrowBackIcon from '@material-ui/icons/ArrowBack'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    headerBar: {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen
      }),
      position: 'relative',
      marginLeft: 0,
      textAlign: 'center',
      height: 48
    },
    background: {
      backgroundColor: theme.palette.grey[800],
      color: theme.palette.common.white,
      padding: theme.spacing(1),
      fontSize: theme.typography.pxToRem(20),
      height: 32
    },
    back: {
      position: 'absolute',
      left: 10,
      top: 0,
      color: theme.palette.common.white
    }
  })
)

const Header = () => {
  const classes = useStyles()
  const location = useLocation()
  const history = useHistory()

  const isDetailPage = !!location.state

  const handleBack = () => {
    history.goBack()
  }

  return (
    <div className={classes.headerBar}>
      <Paper elevation={3} square className={classes.background}>
        {isDetailPage && (
          <IconButton onClick={handleBack} className={classes.back}>
            <ArrowBackIcon color="inherit" />
          </IconButton>
        )}
        <Typography>Header</Typography>
      </Paper>
    </div>
  )
}

export default Header
