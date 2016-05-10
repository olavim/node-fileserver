'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

var _redux = require('redux');

var _UploaderActions = require('../../../actions/UploaderActions');

var UploaderActions = _interopRequireWildcard(_UploaderActions);

var _FileInputButton = require('../components/FileInputButton');

var _FileInputButton2 = _interopRequireDefault(_FileInputButton);

var _CancelButton = require('../components/CancelButton');

var _CancelButton2 = _interopRequireDefault(_CancelButton);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Uploader = function (_React$Component) {
	_inherits(Uploader, _React$Component);

	function Uploader() {
		_classCallCheck(this, Uploader);

		return _possibleConstructorReturn(this, Object.getPrototypeOf(Uploader).apply(this, arguments));
	}

	_createClass(Uploader, [{
		key: 'onClick',
		value: function onClick(e) {
			if (e.target.className === 'uploader') this.props.hideUploader();
		}
	}, {
		key: 'render',
		value: function render() {
			var style = {
				display: this.props.active ? 'block' : 'none'
			};

			return _react2.default.createElement(
				'div',
				{ className: 'uploader', style: style, onClick: this.onClick.bind(this) },
				_react2.default.createElement(
					'div',
					{ className: 'container' },
					_react2.default.createElement(
						'div',
						{ className: 'header' },
						_react2.default.createElement(
							'span',
							null,
							'Upload files'
						)
					),
					_react2.default.createElement(
						'div',
						{ className: 'content' },
						_react2.default.createElement(
							'p',
							null,
							'Choose files to upload. You can select multiple files at the same time.'
						),
						_react2.default.createElement(
							'div',
							{ className: 'buttons' },
							_react2.default.createElement(_FileInputButton2.default, null),
							_react2.default.createElement(_CancelButton2.default, { onAction: this.props.hideUploader })
						)
					)
				)
			);
		}
	}]);

	return Uploader;
}(_react2.default.Component);

function mapStateToProps(state) {
	return {
		active: state.uploader.active
	};
}

function mapDispatchToProps(dispatch) {
	return {
		hideUploader: (0, _redux.bindActionCreators)(UploaderActions, dispatch).hideUploader
	};
}

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(Uploader);