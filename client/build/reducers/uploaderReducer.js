'use strict';

var _UploaderActions = require('../actions/UploaderActions');

var ActionType = _interopRequireWildcard(_UploaderActions);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var initialState = {
	active: false
};

module.exports = function () {
	var state = arguments.length <= 0 || arguments[0] === undefined ? initialState : arguments[0];
	var action = arguments[1];

	switch (action.type) {
		case ActionType.SET_ACTIVE:
			return Object.assign({}, state, { active: action.active });
		default:
			return state;
	}
};