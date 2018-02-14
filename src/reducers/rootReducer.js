
import { createStore, combineReducers, applyMiddleware } from 'redux'
import { reducer as formReducer } from 'redux-form'
import { me } from './me-reducer'
import { login } from './login-reducer'
import thunk from 'redux-thunk'
import {  routerMiddleware } from 'react-router-redux'
import { browserHistory } from 'react-router'
const middleware = routerMiddleware(browserHistory)
 
const rootReducer = combineReducers({
  routing: rootReducer,
  form: formReducer,
  login,
  me
})

const store = createStore(
  rootReducer,
  applyMiddleware(thunk, middleware)
)

export default store