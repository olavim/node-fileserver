'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Tooltip = require('../components/Tooltip');

var _Tooltip2 = _interopRequireDefault(_Tooltip);

var _reactRedux = require('react-redux');

var _redux = require('redux');

var _RouteActions = require('../actions/RouteActions');

var RouteActions = _interopRequireWildcard(_RouteActions);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var App = function App(_ref) {
	var children = _ref.children;
	var tooltip = _ref.tooltip;

	return _react2.default.createElement(
		'div',
		null,
		children,
		_react2.default.createElement(_Tooltip2.default, { active: tooltip.active,
			text: tooltip.text,
			parent: tooltip.parent,
			orientation: tooltip.orientation,
			bgcolor: tooltip.bgcolor })
	);
};

function mapStateToProps(state) {
	return {
		tooltip: state.tooltip
	};
}

module.exports = (0, _reactRedux.connect)(mapStateToProps)(App);