import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import authReducer from '../Reducers/auth'

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; // eslint-disable-line

export default () => {
  // STORE_CREATION
  const store = createStore(
    combineReducers({
      auth: authReducer
    }),
    composeEnhancer(applyMiddleware(thunk))
  )
  return store
}
