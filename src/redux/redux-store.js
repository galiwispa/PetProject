import { applyMiddleware, compose, combineReducers, legacy_createStore as createStore } from 'redux';
import authReducer from './auth-reducer';
import dialogs_reducer from './dialogs-reducer';
import profile_reducer from './profile-reducer';
import sidebarReducer from './sidebar-reducer';
import usersReducer from './users-reducer';
import appReducer from './app-reducer';
import thunkMiddleware from 'redux-thunk';

let reducers = combineReducers({
    messagesPage: dialogs_reducer,
    profilePage: profile_reducer,
    sidebar: sidebarReducer,
    usersPage: usersReducer,
    auth: authReducer,
    app: appReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(
    applyMiddleware(thunkMiddleware)
));


window.__store__ = store;

export default store;