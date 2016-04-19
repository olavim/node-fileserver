'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.fileInfoFields = exports.SORT_FILES = exports.SET_FILES = exports.CHANGE_FILE = undefined;
exports.fetchFile = fetchFile;
exports.changeFile = changeFile;
exports.setFiles = setFiles;
exports.sortFiles = sortFiles;

var _api = require('../api');

var _api2 = _interopRequireDefault(_api);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CHANGE_FILE = exports.CHANGE_FILE = 'CHANGE_FILE';
var SET_FILES = exports.SET_FILES = 'SET_FILES';
var SORT_FILES = exports.SORT_FILES = 'SORT_FILES';

var fileInfoFields = exports.fileInfoFields = ['name', 'modified'];

function fetchFile(path) {
	return {
		type: CHANGE_FILE,
		path: path,
		filetype: filetype
	};
}

function changeFile(path, filetype) {
	return {
		type: CHANGE_FILE,
		path: path,
		filetype: filetype
	};
}

function setFiles(files) {
	return {
		type: SET_FILES,
		files: files
	};
}

function sortFiles(by, asc) {
	return function (dispatch) {
		dispatch({
			type: SORT_FILES,
			sort: {
				by: by,
				asc: asc
			}
		});
	};
}