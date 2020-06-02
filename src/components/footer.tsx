import React from 'react'
import {createStyles, makeStyles, Theme} from '@material-ui/core/styles'
import {Paper} from '@material-ui/core'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    footerBar: {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen
      }),
      marginLeft: 0,
      textAlign: 'center'
    },
    background: {
      backgroundColor: theme.palette.grey[800],
      color: theme.palette.common.white,
      padding: theme.spacing(1),
      fontSize: theme.typography.pxToRem(20)
    }
  })
)

const Footer = () => {
  const classes = useStyles()

  return (
    <div className={classes.footerBar}>
      <Paper elevation={3} square className={classes.background}>
        {new Date().getFullYear()} by 00010100.
      </Paper>
    </div>
  )
}

export default Footer
