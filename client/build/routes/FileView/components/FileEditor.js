'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Worker = require('worker!../../../workers/highlightWorker');

var FileEditor = function (_React$Component) {
	_inherits(FileEditor, _React$Component);

	function FileEditor(props) {
		_classCallCheck(this, FileEditor);

		var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(FileEditor).call(this, props));

		_this.state = { data: escapeHtml(props.currentFile.data), highlighted: false };
		return _this;
	}

	_createClass(FileEditor, [{
		key: 'componentDidMount',
		value: function componentDidMount() {
			var _this2 = this;

			var worker = new Worker();
			worker.onmessage = function (e) {
				_this2.setState({ data: e.data, highlighted: true });
			};
			worker.postMessage([this.props.currentFile.data, this.props.currentFile.filetype]);
		}
	}, {
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				'div',
				{ className: 'file-editor' },
				_react2.default.createElement(
					'pre',
					null,
					_react2.default.createElement('code', { className: this.props.currentFile.filetype,
						dangerouslySetInnerHTML: { __html: this.state.data } })
				)
			);
		}
	}]);

	return FileEditor;
}(_react2.default.Component);

exports.default = FileEditor;


function escapeHtml(unsafe) {
	return unsafe.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#039;");
}