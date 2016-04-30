'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

var _redux = require('redux');

var _FileActions = require('../../../actions/FileActions');

var FileActions = _interopRequireWildcard(_FileActions);

var _TooltipActions = require('../../../actions/TooltipActions');

var TooltipActions = _interopRequireWildcard(_TooltipActions);

var _Tooltip = require('../../../components/Tooltip');

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DirectoryControl = function (_React$Component) {
	_inherits(DirectoryControl, _React$Component);

	function DirectoryControl(props) {
		_classCallCheck(this, DirectoryControl);

		return _possibleConstructorReturn(this, Object.getPrototypeOf(DirectoryControl).call(this, props));
	}

	_createClass(DirectoryControl, [{
		key: 'onMouseOver',
		value: function onMouseOver(e) {
			this.props.showTooltip(e.target, e.target.getAttribute("data-title"), _Tooltip.Orientation.TOP, '#444');
		}
	}, {
		key: 'onMouseOut',
		value: function onMouseOut(e) {
			this.props.hideTooltip();
		}
	}, {
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				'div',
				{ className: 'control' },
				_react2.default.createElement('span', { className: 'new-file',
					'data-title': 'Upload...',
					onMouseOver: this.onMouseOver.bind(this),
					onMouseOut: this.onMouseOut.bind(this) }),
				_react2.default.createElement('span', { className: 'new-folder',
					'data-title': 'New folder',
					onMouseOver: this.onMouseOver.bind(this),
					onMouseOut: this.onMouseOut.bind(this),
					onClick: this.props.onNewDir })
			);
		}
	}]);

	return DirectoryControl;
}(_react2.default.Component);

function mapDispatchToProps(dispatch) {
	return {
		onNewDir: (0, _redux.bindActionCreators)(FileActions, dispatch).newDirectoryPrompt,
		showTooltip: (0, _redux.bindActionCreators)(TooltipActions, dispatch).showTooltip,
		hideTooltip: (0, _redux.bindActionCreators)(TooltipActions, dispatch).hideTooltip

	};
}

exports.default = (0, _reactRedux.connect)(null, mapDispatchToProps)(DirectoryControl);