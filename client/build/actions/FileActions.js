'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.NewDirStage = exports.fileInfoFields = exports.NEW_DIR = exports.SORT_FILES = exports.SET_FILES = exports.CHANGE_FILE = undefined;
exports.fetchFile = fetchFile;
exports.setFiles = setFiles;
exports.sortFiles = sortFiles;
exports.newDirectoryPrompt = newDirectoryPrompt;
exports.newDirectory = newDirectory;

var _api = require('../api');

var _api2 = _interopRequireDefault(_api);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CHANGE_FILE = exports.CHANGE_FILE = 'CHANGE_FILE';
var SET_FILES = exports.SET_FILES = 'SET_FILES';
var SORT_FILES = exports.SORT_FILES = 'SORT_FILES';
var NEW_DIR = exports.NEW_DIR = 'NEW_DIR';

var fileInfoFields = exports.fileInfoFields = ['name', 'modified'];
var NewDirStage = exports.NewDirStage = {
	NONE: 0, // new directory isn't being made
	PROMPT: 1 };

// waiting for directory to be named
function fetchFile(path, file) {
	return {
		type: CHANGE_FILE,
		path: path,
		filetype: file.filetype,
		data: file.data
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

function newDirectoryPrompt() {
	return function (dispatch) {
		dispatch({
			type: NEW_DIR,
			stage: NewDirStage.PROMPT
		});
	};
}

function newDirectory(currentDir, name) {
	return function (dispatch) {
		if (name) {
			_api2.default.newDirectory(currentDir, name).then(function (response) {
				dispatch({
					type: NEW_DIR,
					stage: NewDirStage.CREATE,
					file: {
						name: name,
						path: _path2.default.join(currentDir, name),
						filetype: 'directory'
					}
				});
			}).catch(function (err) {
				console.log(err);
			});
		} else {
			dispatch({
				type: NEW_DIR,
				stage: NewDirStage.NONE
			});
		}
	};
}