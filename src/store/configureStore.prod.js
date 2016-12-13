import { createStore, applyMiddleware, compose } from 'redux'
import rootReducer from '../reducers/rootReducer'
import thunk from 'redux-thunk'
// import promise from 'redux-promise'

const enhancer = applyMiddleware(thunk);

export default function configureStore(initialState) {
	return createStore(rootReducer, initialState, enhancer)
}