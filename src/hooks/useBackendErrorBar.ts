import {useCallback} from 'react'

const useBackendErrorBar = (resetError: () => void) => {
  const closeErrorBar = useCallback(
    (event?: React.SyntheticEvent, reason?: string) => {
      if (reason === 'clickaway') {
        return
      }
      resetError()
    },
    [resetError]
  )

  return [closeErrorBar]
}

export default useBackendErrorBar
