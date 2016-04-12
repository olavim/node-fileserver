'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.navigate = undefined;

var _routeActions = require('../types/routeActions');

var ActionTypes = _interopRequireWildcard(_routeActions);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var navigate = exports.navigate = function navigate(text) {
    return {
        type: ActionTypes.NAVIGATE,
        text: text
    };
};