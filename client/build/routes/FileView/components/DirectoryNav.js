'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _FileLink = require('./FileLink');

var _FileLink2 = _interopRequireDefault(_FileLink);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (_ref) {
	var currentPath = _ref.currentPath;
	var onNavigate = _ref.onNavigate;


	// remove leading and trailing slashes and split the resulting path to directories
	var dirs = currentPath.replace(/^\/|\/$/g, '').split('/');
	return _react2.default.createElement(
		'ul',
		{ className: 'directory-nav' },
		dirs.map(function (dir, index) {
			var link = '/' + dirs.slice(0, index + 1).join('/');
			return _react2.default.createElement(
				'li',
				{ key: index },
				_react2.default.createElement(
					_FileLink2.default,
					{ to: link, onNavigate: onNavigate.bind(undefined, link, 'directory') },
					dir
				)
			);
		})
	);
};