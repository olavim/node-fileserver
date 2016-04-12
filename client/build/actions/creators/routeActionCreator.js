'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _routeActions = require('../types/routeActions');

var ActionTypes = _interopRequireWildcard(_routeActions);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

exports.default = function (text) {
    return {
        type: ActionTypes.NAVIGATE,
        text: text
    };
};