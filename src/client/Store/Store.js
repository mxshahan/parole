import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import authReducer from '../Reducers/auth';
import blogReducer from '../Reducers/blog';
import thunk from 'redux-thunk';
// import { sessionReducer, sessionService } from 'redux-react-session';

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
    //STORE_CREATION
    const store = createStore(
        combineReducers({
            auth: authReducer,
            blog: blogReducer
        }),
        composeEnhancer(applyMiddleware(thunk))
    );
    // sessionService.initSessionService(store)
    return store;
}
