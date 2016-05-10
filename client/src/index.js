require('../assets/style.scss');

import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { enableBatching } from 'redux-batched-actions';
import thunk from 'redux-thunk';

import navigationReducer from './reducers/navigationReducer';
import fileReducer from './reducers/fileReducer';
import tooltipReducer from './reducers/tooltipReducer';
import uploaderReducer from './reducers/uploaderReducer';

import { fileInfoFields, NewDirStage } from './actions/FileActions';
import { navigate } from './actions/RouteActions';

import App from './containers/App';
import { Orientation } from './components/Tooltip';
import FileView from './routes/FileView';

let initialState = {
	tooltip: {
		active: false,
		text: '',
		parent: document.body,
		orientation: Orientation.TOP,
		bgcolor: '#fcc'
	},
	loading: false,
	uploader: {
		active: false,
	},
    currentFile: {
		path: '/',
		filetype: 'directory',
		data: '',
		newDirStage: NewDirStage.NONE,
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
	tooltip: tooltipReducer,
	loading: navigationReducer,
	uploader: uploaderReducer,
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
        <Router history={browserHistory}>
			<Route path="/" component={App}>
				{FileView}
			</Route>
		</Router>
    </Provider>,
    document.getElementById('content')
);