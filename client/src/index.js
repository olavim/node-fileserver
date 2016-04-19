require('../assets/style.scss');

import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import navigationReducer from './reducers/routeReducer';
import fileReducer from './reducers/fileReducer';
import { fileInfoFields } from './actions/FileActions';
import { navigate } from './actions/RouteActions';
import { enableBatching } from 'redux-batched-actions';

import App from './containers/App';
import FileView from './routes/FileView';

let initialState = {
    currentFile: {
		path: '/',
		filetype: 'directory',
		dirData: {
			files: [],
			sort: {
				by: fileInfoFields,
				asc: true
			}
		}
	}
}

let reducers = combineReducers({
    currentFile: fileReducer
});

let store = createStore(
    enableBatching(reducers),
    initialState,
    applyMiddleware(thunk)
);

navigate(window.location.pathname)(store.dispatch);

ReactDOM.render(
    <Provider store={store}>
        <Router history={browserHistory} /*routes={routes}*/>
			<Route path="/" component={App}>
				{FileView}
			</Route>
		</Router>
    </Provider>,
    document.getElementById('content')
);