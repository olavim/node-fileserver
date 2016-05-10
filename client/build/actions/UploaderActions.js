'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.showUploader = showUploader;
exports.hideUploader = hideUploader;
var SET_ACTIVE = exports.SET_ACTIVE = 'SET_ACTIVE';

function showUploader() {
	return function (dispatch) {
		dispatch({
			type: SET_ACTIVE,
			active: true
		});
	};
}

function hideUploader() {
	return function (dispatch) {
		dispatch({
			type: SET_ACTIVE,
			active: false
		});
	};
}