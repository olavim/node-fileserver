'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.Orientation = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Orientation = exports.Orientation = {
	TOP: 'Top',
	RIGHT: 'Right',
	BOTTOM: 'Bottom',
	LEFT: 'Left'
};

var verticalMargin = 40;
var horizontalMargin = 20;

var Tooltip = function (_React$Component) {
	_inherits(Tooltip, _React$Component);

	function Tooltip(props) {
		_classCallCheck(this, Tooltip);

		var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Tooltip).call(this, props));

		_this.state = { width: 0, height: 0, windowWidth: window.innerWidth, windowHeight: window.innerHeight };
		_this.handleResize = _this.handleResize.bind(_this);
		return _this;
	}

	_createClass(Tooltip, [{
		key: 'componentDidMount',
		value: function componentDidMount() {
			window.addEventListener("resize", this.handleResize);
		}
	}, {
		key: 'componentDidUpdate',
		value: function componentDidUpdate() {
			var rect = _reactDom2.default.findDOMNode(this).getBoundingClientRect();
			if (this.state.width !== rect.right - rect.left || this.state.height !== rect.bottom - rect.top) this.setState({ width: rect.right - rect.left, height: rect.bottom - rect.top });

			var bgcolor = hexToRgb(this.props.bgcolor);
			this.luminance = getLuminance(bgcolor);
		}
	}, {
		key: 'handleResize',
		value: function handleResize(e) {
			this.setState({ windowWidth: window.innerWidth, windowHeight: window.innerHeight });
		}
	}, {
		key: 'offset',
		value: function offset() {
			var parentRect = this.props.parent.getBoundingClientRect();
			if (this.props.orientation === Orientation.TOP || this.props.orientation === Orientation.BOTTOM) {
				return {
					left: (parentRect.left + parentRect.right) / 2 - this.state.width / 2,
					top: this.props.orientation === Orientation.TOP ? parentRect.top - verticalMargin : parentRect.bottom + verticalMargin
				};
			} else {
				return {
					left: this.props.orientation === Orientation.LEFT ? parentRect.left - horizontalMargin : parentRect.right + horizontalMargin,
					top: (parentRect.top + parentRect.bottom) / 2 - this.state.height / 2
				};
			}
		}
	}, {
		key: 'render',
		value: function render() {
			var offset = this.offset();
			var style = {
				display: 'none',
				left: offset.left + 'px',
				top: offset.top + 'px',
				backgroundColor: this.props.bgcolor,
				borderColor: this.props.bgcolor,
				color: this.luminance > 0.179 ? '#000' : '#FFF'
			};

			if (this.props.active) Object.assign(style, { display: 'inline' });

			var arrowStyle = {};
			arrowStyle['border' + this.props.orientation + 'Color'] = this.props.bgcolor;

			return _react2.default.createElement(
				'div',
				{ className: 'tooltip ' + this.props.orientation.toLowerCase(), style: style },
				_react2.default.createElement(
					'span',
					null,
					this.props.text
				),
				_react2.default.createElement('div', { className: 'arrow', style: arrowStyle })
			);
		}
	}]);

	return Tooltip;
}(_react2.default.Component);

exports.default = Tooltip;


function getLuminance(color) {
	var c = [color.r / 255, color.g / 255, color.b / 255];
	for (var i = 0; i < c.length; i++) {
		if (c[i] <= 0.03928) {
			c[i] = c[i] / 12.92;
		} else {
			c[i] = Math.pow((c[i] + 0.055) / 1.055, 2.4);
		}
	}

	return 0.2126 * c[0] + 0.7152 * c[1] + 0.0722 * c[2];
}

function hexToRgb(hex) {
	// Expand shorthand form (e.g. "03F") to full form (e.g. "0033FF")
	var shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
	hex = hex.replace(shorthandRegex, function (m, r, g, b) {
		return r + r + g + g + b + b;
	});

	var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
	return result ? {
		r: parseInt(result[1], 16),
		g: parseInt(result[2], 16),
		b: parseInt(result[3], 16)
	} : null;
}