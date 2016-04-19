'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _axios = require('axios');

var _axios2 = _interopRequireDefault(_axios);

var _FileList = require('../components/FileList');

var _FileList2 = _interopRequireDefault(_FileList);

var _DirectoryNav = require('../components/DirectoryNav');

var _DirectoryNav2 = _interopRequireDefault(_DirectoryNav);

var _reactRedux = require('react-redux');

var _redux = require('redux');

var _RouteActions = require('../../../actions/RouteActions');

var RouteActions = _interopRequireWildcard(_RouteActions);

var _FileActions = require('../../../actions/FileActions');

var FileActions = _interopRequireWildcard(_FileActions);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var isDir = function isDir(file) {
	return file.filetype === 'directory';
};

var FileView = function FileView(_ref) {
	var currentFile = _ref.currentFile;
	var routeActions = _ref.routeActions;
	var fileActions = _ref.fileActions;

	return _react2.default.createElement(
		'div',
		{ className: 'file-view' },
		_react2.default.createElement(_DirectoryNav2.default, { currentPath: currentFile.path, onNavigate: routeActions.navigate }),
		isDir(currentFile) ? _react2.default.createElement(_FileList2.default, {
			currentFile: currentFile,
			onNavigate: routeActions.navigate,
			onSort: fileActions.sortFiles }) : ''
	);
};

function mapStateToProps(state) {
	if (!isDir(state.currentFile)) {
		return {
			currentFile: {
				path: state.currentFile.path,
				filetype: state.currentFile.filetype
			}
		};
	}

	var dirData = state.currentFile.dirData;
	var files = dirData.files.slice(0);

	files.sort(function (a, b) {
		if (a.filetype !== b.filetype && (isDir(a) || isDir(b))) return isDir(a) ? -1 : 1;

		for (var i = 0; i < dirData.sort.by.length; i++) {
			var field = dirData.sort.by[i];
			var comp = a[field].localeCompare(b[field]);
			if (comp !== 0) return dirData.sort.asc ? comp : -comp;
		}

		return 0;
	});

	return {
		currentFile: {
			path: state.currentFile.path,
			filetype: state.currentFile.filetype,
			dirData: {
				files: files,
				sort: dirData.sort
			}
		}
	};
}

function mapDispatchToProps(dispatch) {
	return {
		routeActions: (0, _redux.bindActionCreators)(RouteActions, dispatch),
		fileActions: (0, _redux.bindActionCreators)(FileActions, dispatch)
	};
}

module.exports = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(FileView);