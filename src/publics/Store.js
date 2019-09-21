import {createStore, applyMiddleware} from 'redux'
import { createLogger } from "redux-logger"
import Rpm from 'redux-promise-middleware'
//import thunk from 'redux-thunk'
import rootReducer from './reducers'
const initState = {}
const logger = createLogger()
const middleware = [logger, Rpm]
//const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENTION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  initState,
  applyMiddleware(...middleware)
)

export default store
