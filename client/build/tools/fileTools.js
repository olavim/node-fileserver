'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
var isDir = exports.isDir = function isDir(file) {
	return file.filetype === 'directory';
};

var sortFiles = exports.sortFiles = function sortFiles(files, asc, by) {
	files.sort(function (a, b) {
		if (a.filetype !== b.filetype && (isDir(a) || isDir(b))) return isDir(a) ? -1 : 1;

		for (var i = 0; i < by.length; i++) {
			var field = by[i];
			var comp = a[field].localeCompare(b[field]);
			if (comp !== 0) return asc ? comp : -comp;
		}

		return 0;
	});
};

var isValidFilename = exports.isValidFilename = function isValidFilename(name) {
	var p1 = /^[^\/\\*"?\[\]:;|=,]*$/; // illegal characters
	var p2 = /^(?!\.{1,2}$).*/; // do not match . or ..
	return p1.test(name) && p2.test(name);
};