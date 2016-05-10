'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (_ref) {
	var onAction = _ref.onAction;
	var className = _ref.className;
	var children = _ref.children;

	return _react2.default.createElement(
		'a',
		{ className: 'button ' + className, onClick: onAction },
		children
	);
};