import {
  applyMiddleware,
  createStore,
  compose
} from 'redux'

import thunk from 'redux-thunk'
import rootReducer from './rootReducer'

const middleware = applyMiddleware(
  thunk
)

let reduxDevTools = null
if (window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) {
  reduxDevTools = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
}

const composeEnhancers = reduxDevTools || compose

const store = createStore(
  rootReducer,
  composeEnhancers(middleware)
)

export default store