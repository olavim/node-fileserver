'use strict';

var _RouteActions = require('../actions/RouteActions');

var ActionTypes = _interopRequireWildcard(_RouteActions);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

module.exports = function () {
    var state = arguments.length <= 0 || arguments[0] === undefined ? '/' : arguments[0];
    var action = arguments[1];

    switch (action.type) {
        case ActionTypes.NAVIGATE:
            return action.text;
        default:
            return state;
    }
};