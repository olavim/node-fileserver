'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactRouter = require('react-router');

var _reactRedux = require('react-redux');

var _redux = require('redux');

var _reduxThunk = require('redux-thunk');

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

var _routeReducer = require('./reducers/routeReducer');

var _routeReducer2 = _interopRequireDefault(_routeReducer);

var _fileReducer = require('./reducers/fileReducer');

var _fileReducer2 = _interopRequireDefault(_fileReducer);

var _FileActions = require('./actions/FileActions');

var _RouteActions = require('./actions/RouteActions');

var _reduxBatchedActions = require('redux-batched-actions');

var _App = require('./containers/App');

var _App2 = _interopRequireDefault(_App);

var _FileView = require('./routes/FileView');

var _FileView2 = _interopRequireDefault(_FileView);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

require('../assets/style.scss');

var initialState = {
	currentFile: {
		path: '/',
		filetype: 'directory',
		dirData: {
			files: [],
			sort: {
				by: _FileActions.fileInfoFields,
				asc: true
			}
		}
	}
};

var reducers = (0, _redux.combineReducers)({
	currentFile: _fileReducer2.default
});

var store = (0, _redux.createStore)((0, _reduxBatchedActions.enableBatching)(reducers), initialState, (0, _redux.applyMiddleware)(_reduxThunk2.default));

(0, _RouteActions.navigate)(window.location.pathname)(store.dispatch);

_reactDom2.default.render(_react2.default.createElement(
	_reactRedux.Provider,
	{ store: store },
	_react2.default.createElement(
		_reactRouter.Router,
		{ history: _reactRouter.browserHistory /*routes={routes}*/ },
		_react2.default.createElement(
			_reactRouter.Route,
			{ path: '/', component: _App2.default },
			_FileView2.default
		)
	)
), document.getElementById('content'));