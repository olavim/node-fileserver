import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import navigationReducer from './reducers/navigation';
import fileReducer from './reducers/files';

let routes = {
    component: 'div',
    childRoutes: [{
        path: '/',
        component: require('./containers/App'),
        childRoutes: [
            require('./routes/FileView')
        ]
    }]
};

let initialState = {
    currentPath: '/',
    files: []
}

let reducers = combineReducers({
    currentPath: navigationReducer,
    files: fileReducer
});

let store = createStore(
    reducers,
    initialState,
    applyMiddleware(thunk)
);

ReactDOM.render(
    <Provider store={store}>
        <Router history={browserHistory} routes={routes} />
    </Provider>,
    document.getElementById('content')
);