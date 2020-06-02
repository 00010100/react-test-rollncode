import React, {useState, useEffect} from 'react'
import {connect, ConnectedProps} from 'react-redux'
import {TextField} from '@material-ui/core'

import useDebounce from 'src/hooks/useDebounce'
import {SearchActions} from 'src/redux/actions'

const connector = connect(null, {
  search: (payload: string) => SearchActions.search(payload)
})

type PropsFromRedux = ConnectedProps<typeof connector>

const SearchInput = ({search}: PropsFromRedux) => {
  const [value, setValue] = useState('')

  const debouncedValue = useDebounce(value, 250)

  useEffect(() => {
    search(debouncedValue)
  }, [debouncedValue, search])

  return <TextField label="Search..." fullWidth value={value} onChange={e => setValue(e.target.value)} />
}

export default connector(SearchInput)
