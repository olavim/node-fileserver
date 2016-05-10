'use strict';

var _highlight = require('highlight.js');

var _highlight2 = _interopRequireDefault(_highlight);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

onmessage = function onmessage(e) {
	if (_highlight2.default.getLanguage(e.data[1])) {
		var result = _highlight2.default.highlightAuto(e.data[0], [e.data[1]]);
		postMessage(result.value);
	} else {
		postMessage(e.data[0]);
	}
};