'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.FETCH_FILES = undefined;
exports.fetchFiles = fetchFiles;

var _api = require('../api');

var _api2 = _interopRequireDefault(_api);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var FETCH_FILES = exports.FETCH_FILES = 'FETCH_FILES';

function fetchFiles(dir) {
	return function (dispatch) {
		_api2.default.fetchFiles(dir).then(function (response) {
			dispatch({
				type: FETCH_FILES,
				payload: response.data.files
			});
		}).catch(function (error) {
			console.error(error.stack);
		});
	};
}