'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _axios = require('axios');

var _axios2 = _interopRequireDefault(_axios);

var _FileList = require('./FileList');

var _FileList2 = _interopRequireDefault(_FileList);

var _FileEditor = require('../components/FileEditor');

var _FileEditor2 = _interopRequireDefault(_FileEditor);

var _DirectoryNav = require('../components/DirectoryNav');

var _DirectoryNav2 = _interopRequireDefault(_DirectoryNav);

var _DirectoryControl = require('./DirectoryControl');

var _DirectoryControl2 = _interopRequireDefault(_DirectoryControl);

var _Tooltip = require('../../../components/Tooltip');

var _Tooltip2 = _interopRequireDefault(_Tooltip);

var _Uploader = require('./Uploader');

var _Uploader2 = _interopRequireDefault(_Uploader);

var _reactRedux = require('react-redux');

var _redux = require('redux');

var _RouteActions = require('../../../actions/RouteActions');

var RouteActions = _interopRequireWildcard(_RouteActions);

var _FileActions = require('../../../actions/FileActions');

var FileActions = _interopRequireWildcard(_FileActions);

var _TooltipActions = require('../../../actions/TooltipActions');

var TooltipActions = _interopRequireWildcard(_TooltipActions);

var _fileTools = require('../../../tools/fileTools');

var fileTools = _interopRequireWildcard(_fileTools);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var FileView = function FileView(_ref) {
	var loading = _ref.loading;
	var currentFile = _ref.currentFile;
	var onNavigate = _ref.onNavigate;
	var tooltip = _ref.tooltip;

	var isDir = fileTools.isDir(currentFile);
	return _react2.default.createElement(
		'div',
		{ className: 'file-view' },
		_react2.default.createElement(_Uploader2.default, null),
		_react2.default.createElement(
			'div',
			{ className: 'top-bar' },
			_react2.default.createElement(_DirectoryNav2.default, { currentPath: currentFile.path, onNavigate: onNavigate }),
			isDir ? _react2.default.createElement(_DirectoryControl2.default, null) : ''
		),
		isDir ? _react2.default.createElement(_FileList2.default, {
			currentFile: currentFile,
			onNavigate: onNavigate,
			loading: loading }) : _react2.default.createElement(_FileEditor2.default, { currentFile: currentFile })
	);
};

function mapStateToProps(state) {
	if (!fileTools.isDir(state.currentFile)) {
		return {
			currentFile: {
				path: state.currentFile.path,
				filetype: state.currentFile.filetype,
				data: state.currentFile.data
			}
		};
	}

	var dirData = state.currentFile.dirData;
	var files = dirData.files.slice(0);

	fileTools.sortFiles(files, dirData.sort.asc, dirData.sort.by);

	return {
		tooltip: state.tooltip,
		loading: state.loading,
		currentFile: {
			path: state.currentFile.path,
			filetype: state.currentFile.filetype,
			newDirStage: state.currentFile.newDirStage,
			dirData: {
				files: files,
				sort: dirData.sort
			}
		}
	};
}

function mapDispatchToProps(dispatch) {
	return {
		onNavigate: (0, _redux.bindActionCreators)(RouteActions, dispatch).navigate
	};
}

module.exports = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(FileView);