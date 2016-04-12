import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import navigationReducer from './reducers/navigation';

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
    path: '/',
    files: []
}

let store = createStore(
    navigationReducer,
    initialState
);

ReactDOM.render(
    <Provider store={store}>
        <Router history={browserHistory} routes={routes} />
    </Provider>,
    document.getElementById('content')
);