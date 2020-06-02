import React from 'react'

import {Button, CircularProgress} from '@material-ui/core'

const ButtonWithLoading = ({disabled, children, ...rest}: any) => {
  return (
    <Button {...rest} disabled={disabled}>
      {disabled ? (
        <>
          {children}
          <CircularProgress size={18} style={{marginLeft: 5}} />
        </>
      ) : (
        <>{children}</>
      )}
    </Button>
  )
}

export default ButtonWithLoading
