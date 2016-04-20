'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _highlight = require('highlight.js');

var _highlight2 = _interopRequireDefault(_highlight);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _react2.default.createClass({
	displayName: 'FileEditor',

	componentDidMount: function componentDidMount() {
		var editorNode = document.getElementsByClassName('file-editor')[0];
		var codeNode = editorNode.getElementsByTagName('code')[0];
		_highlight2.default.highlightBlock(codeNode);
	},
	render: function render() {
		return _react2.default.createElement(
			'div',
			{ className: 'file-editor' },
			_react2.default.createElement(
				'pre',
				null,
				_react2.default.createElement(
					'code',
					{ className: this.props.currentFile.filetype },
					this.props.currentFile.data
				)
			)
		);
	}
});