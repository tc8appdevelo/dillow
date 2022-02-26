import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import thunk from 'redux-thunk';
import rootReducer from "../reducers/root_reducer"
import { composeWithDevTools } from "redux-devtools-extension";


const configureStore = (preloadedState = {}) => {
    const middlewares = [thunk, logger];
    // const middlewares = [thunk]
    const middlewareEnhancer = applyMiddleware(...middlewares);
    const composedEnhancers = composeWithDevTools(middlewareEnhancer);

    const store = createStore(rootReducer, preloadedState, composedEnhancers);
    return store;
}

export default configureStore;