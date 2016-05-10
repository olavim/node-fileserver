'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Button = require('../../../components/Button');

var _Button2 = _interopRequireDefault(_Button);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (_ref) {
	var onAction = _ref.onAction;

	return _react2.default.createElement(
		_Button2.default,
		{ className: 'cancel white', onAction: onAction },
		_react2.default.createElement(
			'label',
			null,
			'Cancel'
		)
	);
};