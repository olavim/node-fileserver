'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactRouter = require('react-router');

var _reactRedux = require('react-redux');

var _redux = require('redux');

var _reduxBatchedActions = require('redux-batched-actions');

var _reduxThunk = require('redux-thunk');

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

var _navigationReducer = require('./reducers/navigationReducer');

var _navigationReducer2 = _interopRequireDefault(_navigationReducer);

var _fileReducer = require('./reducers/fileReducer');

var _fileReducer2 = _interopRequireDefault(_fileReducer);

var _tooltipReducer = require('./reducers/tooltipReducer');

var _tooltipReducer2 = _interopRequireDefault(_tooltipReducer);

var _uploaderReducer = require('./reducers/uploaderReducer');

var _uploaderReducer2 = _interopRequireDefault(_uploaderReducer);

var _FileActions = require('./actions/FileActions');

var _RouteActions = require('./actions/RouteActions');

var _App = require('./containers/App');

var _App2 = _interopRequireDefault(_App);

var _Tooltip = require('./components/Tooltip');

var _FileView = require('./routes/FileView');

var _FileView2 = _interopRequireDefault(_FileView);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

require('../assets/style.scss');

var initialState = {
	tooltip: {
		active: false,
		text: '',
		parent: document.body,
		orientation: _Tooltip.Orientation.TOP,
		bgcolor: '#fcc'
	},
	loading: false,
	uploader: {
		active: false
	},
	currentFile: {
		path: '/',
		filetype: 'directory',
		data: '',
		newDirStage: _FileActions.NewDirStage.NONE,
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
	tooltip: _tooltipReducer2.default,
	loading: _navigationReducer2.default,
	uploader: _uploaderReducer2.default,
	currentFile: _fileReducer2.default
});

var store = (0, _redux.createStore)((0, _reduxBatchedActions.enableBatching)(reducers), initialState, (0, _redux.applyMiddleware)(_reduxThunk2.default));

(0, _RouteActions.navigate)(window.location.pathname)(store.dispatch);

_reactDom2.default.render(_react2.default.createElement(
	_reactRedux.Provider,
	{ store: store },
	_react2.default.createElement(
		_reactRouter.Router,
		{ history: _reactRouter.browserHistory },
		_react2.default.createElement(
			_reactRouter.Route,
			{ path: '/', component: _App2.default },
			_FileView2.default
		)
	)
), document.getElementById('content'));