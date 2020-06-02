import React from 'react'
import {RouteComponentProps} from 'react-router-dom'

const NotFound = ({location}: RouteComponentProps) => (
  <div>
    <h3>
      No match for <code>{location.pathname}</code>
    </h3>
  </div>
)

export default NotFound
