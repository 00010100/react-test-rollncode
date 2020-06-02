import React from 'react'
import {Snackbar} from '@material-ui/core'
import MuiAlert, {AlertProps} from '@material-ui/lab/Alert'

interface Props {
  error: string
  onClose: () => void
}

function Alert(props: AlertProps) {
  return <MuiAlert elevation={6} variant="filled" {...props} />
}

const BackendErrorMessage = ({error, onClose}: Props) => {
  return (
    <Snackbar
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'right'
      }}
      open={!!error}
    >
      <Alert onClose={onClose} severity="error">
        {error}
      </Alert>
    </Snackbar>
  )
}

export default BackendErrorMessage
