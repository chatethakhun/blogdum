
import { createStore, combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import { me } from './me-reducer'

const rootReducer = combineReducers({
  // ...your other reducers here
  // you have to pass formReducer under 'form' key,
  // for custom keys look up the docs for 'getFormState'
  form: formReducer,
  me
})

const store = createStore(rootReducer)

export default store