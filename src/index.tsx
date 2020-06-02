import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'

import store from 'src/redux/store'
import Routes from 'src/routes'
import './index.scss'
import * as serviceWorker from './serviceWorker'

ReactDOM.render(
  <Provider store={store}>
    <Routes />
  </Provider>,
  document.getElementById('root')
)

serviceWorker.unregister()
