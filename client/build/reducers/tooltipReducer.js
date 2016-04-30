'use strict';

var _TooltipActions = require('../actions/TooltipActions');

var ActionType = _interopRequireWildcard(_TooltipActions);

var _Tooltip = require('../components/Tooltip');

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var initialState = {
	active: false,
	text: '',
	parent: document.body,
	orientation: _Tooltip.Orientation.TOP,
	bgcolor: '#fcc'
};

module.exports = function () {
	var state = arguments.length <= 0 || arguments[0] === undefined ? initialState : arguments[0];
	var action = arguments[1];

	switch (action.type) {
		case ActionType.TOOLTIP_SHOW:
			return Object.assign({}, state, {
				active: true,
				text: action.text,
				parent: action.parent,
				orientation: action.orientation,
				bgcolor: action.bgcolor
			});
		case ActionType.TOOLTIP_HIDE:
			return Object.assign({}, state, initialState);
		default:
			return state;
	}
};