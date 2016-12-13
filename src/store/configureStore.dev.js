import { createStore, applyMiddleware, compose } from 'redux'
// import promise from 'redux-promise'
import reducer from '../reducers'

export default function configureStore(initialState){
	const finalCreateStore - compose(
		applyMiddleware(thunk),
		window.devToolExtension ? window.devToolExtension( : f => f
		)(creatStore);

		const store = finalCreateStore(reducer, initialState);

		if (module.hot) {
			module.hot.accept('../reducers', () => {
				const nextReducer = require('../reducers')
				store.replaceReducer(nextReducer);
			})
		}

		return store
}