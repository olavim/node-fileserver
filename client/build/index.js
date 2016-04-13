'use strict';

require('babel-polyfill');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactRouter = require('react-router');

var _reactRedux = require('react-redux');

var _redux = require('redux');

var _reduxThunk = require('redux-thunk');

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

var _navigation = require('./reducers/navigation');

var _navigation2 = _interopRequireDefault(_navigation);

var _files = require('./reducers/files');

var _files2 = _interopRequireDefault(_files);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var routes = {
    component: 'div',
    childRoutes: [{
        path: '/',
        component: require('./containers/App'),
        childRoutes: [require('./routes/FileView')]
    }]
};

var initialState = {
    currentPath: '/',
    files: []
};

var reducers = (0, _redux.combineReducers)({
    currentPath: _navigation2.default,
    files: _files2.default
});

var store = (0, _redux.createStore)(reducers, initialState, (0, _redux.applyMiddleware)(_reduxThunk2.default));

_reactDom2.default.render(_react2.default.createElement(
    _reactRedux.Provider,
    { store: store },
    _react2.default.createElement(_reactRouter.Router, { history: _reactRouter.browserHistory, routes: routes })
), document.getElementById('content'));