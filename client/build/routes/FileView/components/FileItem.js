'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

var _FileLink = require('./FileLink');

var _FileLink2 = _interopRequireDefault(_FileLink);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var FileItem = function (_React$Component) {
	_inherits(FileItem, _React$Component);

	function FileItem(props) {
		_classCallCheck(this, FileItem);

		var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(FileItem).call(this, props));

		_this.state = { active: false };
		return _this;
	}

	_createClass(FileItem, [{
		key: 'onNavigate',
		value: function onNavigate(link, filetype) {
			this.activate();
			this.props.onNavigate(link, filetype);
		}
	}, {
		key: 'componentDidUpdate',
		value: function componentDidUpdate() {
			if (!this.props.loading && this.state.active) this.setState({ active: false });
		}
	}, {
		key: 'activate',
		value: function activate() {
			this.setState({ active: true });
		}
	}, {
		key: 'render',
		value: function render() {
			var isDir = function isDir(file) {
				return file.filetype === 'directory';
			};
			var file = this.props.file;
			var link = this.props.link;
			var modified = isDir(file) ? '--' : (0, _moment2.default)(file.modified).format('DD/MM/YYYY HH:mm');

			return _react2.default.createElement(
				'div',
				{ className: 'item' + (isDir(file) ? ' dir' : '') + (this.state.active ? ' active' : '') },
				_react2.default.createElement(
					'div',
					{ className: 'name' },
					_react2.default.createElement(
						_FileLink2.default,
						{ to: link, onNavigate: this.onNavigate.bind(this, link, file.filetype) },
						file.name
					)
				),
				_react2.default.createElement(
					'div',
					{ className: 'modified' },
					modified
				)
			);
		}
	}]);

	return FileItem;
}(_react2.default.Component);

exports.default = FileItem;