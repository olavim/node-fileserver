'use strict';

var _AlertActions = require('../actions/AlertActions');

var ActionType = _interopRequireWildcard(_AlertActions);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var initialState = {
	active: false,
	message: ''
};

module.exports = function () {
	var state = arguments.length <= 0 || arguments[0] === undefined ? initialState : arguments[0];
	var action = arguments[1];

	switch (action.type) {
		case ActionType.ALERT_SHOW:
			return Object.assign({}, state, { active: true, message: action.message });
		case ActionType.ALERT_HIDE:
			return Object.assign({}, state, { active: false, message: '' });
		default:
			return state;
	}
};