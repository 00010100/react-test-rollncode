import React from 'react'
import {CircularProgress} from '@material-ui/core'
import {makeStyles, createStyles} from '@material-ui/core/styles'

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      display: 'flex',
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
      alignItems: 'center',
      justifyContent: 'center',
      position: 'fixed',
      backgroundColor: '#fff',
      width: '100%',
      height: '100%'
    }
  })
)

const Loader = ({pos}: any) => {
  const classes = useStyles()

  return (
    <div className={classes.root} style={{position: pos}}>
      <CircularProgress />
    </div>
  )
}

export default Loader
