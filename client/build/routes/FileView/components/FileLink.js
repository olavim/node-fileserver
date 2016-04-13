'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = _react2.default.createClass({
	displayName: 'exports',

	_onClick: function _onClick() {
		this.props.onNavigate(this.props.to);
	},
	render: function render() {
		return _react2.default.createElement(
			_reactRouter.Link,
			{ to: this.props.to, onClick: this._onClick },
			this.props.children
		);
	}
});