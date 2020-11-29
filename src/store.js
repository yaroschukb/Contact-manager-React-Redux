import {createStore, combineReducers, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import contactReducer from './reducers/contactReducer'

const initialState = {}

const middleware = [thunk]
const reducers = combineReducers({
    contact: contactReducer
})

const store = createStore(reducers, initialState, compose(applyMiddleware(...middleware),
window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ &&
window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__()
))

export default store