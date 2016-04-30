'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.hideTooltips = exports.showTooltip = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _Tooltip = require('../components/Tooltip');

var _Tooltip2 = _interopRequireDefault(_Tooltip);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var showTooltip = exports.showTooltip = function showTooltip(parent, text) {
	var parentRect = parent.getBoundingClientRect();
	var style = {
		left: parentRect.left + 'px',
		top: parentRect.top - 20 + 'px'
	};

	var tooltip = _react2.default.createElement(_Tooltip2.default, { text: text, style: style });
	//parent.appendChild(React.findDOMNode(tooltip));
	_reactDom2.default.render(tooltip, document.body);
};

var hideTooltips = exports.hideTooltips = function hideTooltips(parent) {
	var tooltips = parent.getElementsByClassName('tooltip');
	for (var i = 0; i < tooltips.length; i++) {
		parent.removeChild(tooltips[i]);
	}
};