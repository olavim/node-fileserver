'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _FileLink = require('./FileLink');

var _FileLink2 = _interopRequireDefault(_FileLink);

var _Heading = require('./Heading');

var _Heading2 = _interopRequireDefault(_Heading);

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (_ref) {
	var currentFile = _ref.currentFile;
	var onNavigate = _ref.onNavigate;
	var onSort = _ref.onSort;

	var isDir = function isDir(file) {
		return file.filetype === 'directory';
	};
	var dirname = isDir(currentFile) ? currentFile.path : _path2.default.dirname(currentFile.path);
	var sort = currentFile.dirData.sort;

	return _react2.default.createElement(
		'div',
		{ className: 'file-list' },
		_react2.default.createElement(
			'div',
			{ className: 'header' },
			_react2.default.createElement(_Heading2.default, { sort: sort, onSort: onSort, heading: 'Name' }),
			_react2.default.createElement(_Heading2.default, { sort: sort, onSort: onSort, heading: 'Modified' })
		),
		_react2.default.createElement(
			'div',
			{ className: 'file-item-list' },
			currentFile.dirData.files.map(function (file, index) {
				var modified = isDir(file) ? '--' : (0, _moment2.default)(file.modified).format('DD/MM/YYYY HH:mm');
				var to = _path2.default.join(dirname, file.name) + (isDir(file) ? '/' : '');

				return _react2.default.createElement(
					'div',
					{ key: index, className: 'item' + (isDir(file) ? ' dir' : '') },
					_react2.default.createElement(
						'div',
						{ className: 'name' },
						_react2.default.createElement(
							_FileLink2.default,
							{ to: to, onNavigate: onNavigate.bind(undefined, to, file.filetype) },
							file.name
						)
					),
					_react2.default.createElement(
						'div',
						{ className: 'modified' },
						modified
					)
				);
			})
		)
	);
};