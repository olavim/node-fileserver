'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.navigate = exports.NAVIGATE = undefined;

var _api = require('../api');

var _api2 = _interopRequireDefault(_api);

var _FileActions = require('./FileActions');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var NAVIGATE = exports.NAVIGATE = 'NAVIGATE';

var navigate = exports.navigate = function navigate(text) {
	return function (dispatch) {
		dispatch({
			type: NAVIGATE,
			text: text
		});

		(0, _FileActions.fetchFiles)(text.substr(5))(dispatch);
	};
};