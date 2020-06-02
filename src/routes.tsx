import React from 'react'
import {Switch, Route} from 'react-router-dom'
import {ConnectedRouter} from 'connected-react-router'

import {MainPage, NotFound, UserDetails} from 'src/pages'
import {history} from 'src/redux/store'

export default () => {
  return (
    <ConnectedRouter history={history}>
      <Switch>
        <Route path="/" exact component={MainPage} />
        <Route path="/user/:id" exact component={UserDetails} />

        <Route component={NotFound} />
      </Switch>
    </ConnectedRouter>
  )
}
