'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
var RETRIEVE_FILES = exports.RETRIEVE_FILES = 'RETRIEVE_FILES';

var retrieveFiles = exports.retrieveFiles = function retrieveFiles(path) {
	return {
		type: ActionTypes.RETRIEVE_FILES,
		path: path
	};
};