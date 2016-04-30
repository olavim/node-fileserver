'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _axios = require('axios');

var _axios2 = _interopRequireDefault(_axios);

var _config = require('../config');

var _config2 = _interopRequireDefault(_config);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
	fetchFileData: function fetchFileData(dir) {
		return _axios2.default.get(getFileUrl(dir));
	},
	newDirectory: function newDirectory(currentDir, name) {
		return _axios2.default.post(getFileUrl(currentDir) + '?dir=' + name);
	}
};


function getFileUrl(dir) {
	dir = dir.replace(/^\/home/, '');
	return _config2.default.apiUrl + _path2.default.join('files', dir);
}