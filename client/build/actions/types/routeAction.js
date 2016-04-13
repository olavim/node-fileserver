'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
var NAVIGATE = exports.NAVIGATE = 'NAVIGATE';

var navigate = exports.navigate = function navigate(text) {
	return {
		type: ActionTypes.NAVIGATE,
		text: text
	};
};