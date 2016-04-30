'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.navigate = exports.Navigate = undefined;

var _api = require('../api');

var _api2 = _interopRequireDefault(_api);

var _FileActions = require('./FileActions');

var ActionType = _interopRequireWildcard(_FileActions);

var _reactRouter = require('react-router');

var _reduxBatchedActions = require('redux-batched-actions');

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Navigate = exports.Navigate = {
	START: 'NAVIGATE_START',
	END: 'NAVIGATE_END'
};

var navigate = exports.navigate = function navigate(path) {
	return function (dispatch) {
		dispatch({ type: Navigate.START });

		_api2.default.fetchFileData(path).then(function (response) {
			dispatch((0, _reduxBatchedActions.batchActions)([(0, _FileActions.fetchFile)(path, response.data), (0, _FileActions.setFiles)(response.data.files), { type: Navigate.END }]));
		}).catch(function (error) {
			console.error(error.stack);
		});
	};
};