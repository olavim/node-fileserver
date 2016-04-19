'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (_ref) {
	var children = _ref.children;
	var to = _ref.to;
	var onNavigate = _ref.onNavigate;

	return _react2.default.createElement(
		_reactRouter.Link,
		{ to: to, onClick: onNavigate, activeClassName: 'active' },
		children
	);
};