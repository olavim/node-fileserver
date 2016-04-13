'use strict';

var _FileActions = require('../actions/FileActions');

var ActionTypes = _interopRequireWildcard(_FileActions);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

module.exports = function () {
	var state = arguments.length <= 0 || arguments[0] === undefined ? [] : arguments[0];
	var action = arguments[1];

	switch (action.type) {
		case ActionTypes.FETCH_FILES:
			return action.payload;
		default:
			return state;
	}
};