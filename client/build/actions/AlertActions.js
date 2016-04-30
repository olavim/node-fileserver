'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.showAlert = showAlert;
exports.hideAlert = hideAlert;
var ALERT_SHOW = exports.ALERT_SHOW = 'ALERT_SHOW';
var ALERT_HIDE = exports.ALERT_HIDE = 'ALERT_HIDE';

function showAlert(message) {
	return function (dispatch) {
		return {
			type: ALERT_SHOW,
			message: message
		};
	};
}

function hideAlert() {
	return function (dispatch) {
		return {
			type: ALERT_HIDE,
			message: ''
		};
	};
}