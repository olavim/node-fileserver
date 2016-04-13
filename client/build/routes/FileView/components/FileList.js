'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _DirectoryLink = require('./DirectoryLink');

var _DirectoryLink2 = _interopRequireDefault(_DirectoryLink);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var FileList = function FileList(_ref) {
	var files = _ref.files;
	var currentPath = _ref.currentPath;
	var onNavigate = _ref.onNavigate;

	return _react2.default.createElement(
		'ul',
		null,
		files.map(function (file, index) {
			if (file.type === 'directory') {
				var to = _path2.default.join(currentPath, file.name);
				return _react2.default.createElement(
					'li',
					{ key: index },
					_react2.default.createElement(
						_DirectoryLink2.default,
						{ to: to, onNavigate: onNavigate },
						file.name
					)
				);
			}

			return _react2.default.createElement(
				'li',
				{ key: index },
				file.name
			);
		})
	);
};

module.exports = FileList;