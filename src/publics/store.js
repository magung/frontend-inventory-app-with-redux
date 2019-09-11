import {createStore, applyMiddleware, compose} from 'redux'
import { createLogger } from "redux-logger"
import Rpm from 'redux-promise-middleware'
import thunk from 'redux-thunk'
import rootReducer from './reducers'
const initState = {}
const logger = createLogger()
const middleware = [thunk, logger, Rpm]
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENTION_COMPOSE__ || compose; 

const store = createStore(
  rootReducer,
  initState,
  composeEnhancers(applyMiddleware(...middleware))
)

export default store
