import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from './reducers/rootReducer'
import { composeWithDevTools } from 'redux-devtools-extension';

// for composeWithDevTools
const composeEnhancers = composeWithDevTools({});

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))

export default store


// THIS PAGE IS HERE FOR REFERENCE ACTUAL FILES ARE CURRENTLY BEING PULLED FROM 'STORE/CONFIGURESTORE'