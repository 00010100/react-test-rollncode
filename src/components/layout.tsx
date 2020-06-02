import React from 'react'
import {createStyles, makeStyles, Theme} from '@material-ui/core/styles'
import {Fab} from '@material-ui/core'
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp'

import {Footer, ScrollTop, Header} from 'src/components'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
      height: '100%',
      display: 'flex',
      flexDirection: 'column'
    },
    content: {
      flexGrow: 1,
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen
      }),
      marginLeft: 0
    }
  })
)

interface Props {
  children: JSX.Element
}

const WithLayout = ({children}: Props) => {
  const classes = useStyles()

  return (
    <div className={classes.root} id="back-to-top-anchor">
      <Header />
      <div className={classes.content}>
        {children}
        <ScrollTop>
          <Fab color="secondary" size="small" aria-label="scroll back to top">
            <KeyboardArrowUpIcon />
          </Fab>
        </ScrollTop>
      </div>
      <Footer />
    </div>
  )
}

export default WithLayout
