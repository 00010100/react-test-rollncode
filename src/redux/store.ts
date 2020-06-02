import {applyMiddleware, compose, createStore, Store} from 'redux'
import {routerMiddleware} from 'connected-react-router'
import createSagaMiddleware from 'redux-saga'
import {createBrowserHistory} from 'history'

import createRootReducer from 'src/redux/reducers'
import rootSaga from 'src/redux/sagas'
import {StoreState} from 'src/redux/reducers/state'

export const history = createBrowserHistory()

const sagaMiddleware = createSagaMiddleware()
const composeEnhancers = (window && (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose
const enhancer = composeEnhancers(applyMiddleware(sagaMiddleware, routerMiddleware(history)))
const store: Store<StoreState> = createStore(createRootReducer(history), enhancer)

sagaMiddleware.run(rootSaga)

export default store
