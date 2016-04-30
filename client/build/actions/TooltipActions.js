'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.showTooltip = showTooltip;
exports.hideTooltip = hideTooltip;
var TOOLTIP_SHOW = exports.TOOLTIP_SHOW = 'TOOLTIP_SHOW';
var TOOLTIP_HIDE = exports.TOOLTIP_HIDE = 'TOOLTIP_HIDE';

function showTooltip(parent, text, orientation, bgcolor) {
	return function (dispatch) {
		dispatch({
			type: TOOLTIP_SHOW,
			parent: parent,
			text: text,
			orientation: orientation,
			bgcolor: bgcolor
		});
	};
}

function hideTooltip() {
	return function (dispatch) {
		dispatch({
			type: TOOLTIP_HIDE
		});
	};
}