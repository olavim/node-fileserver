'use strict';

var _RouteActions = require('../actions/RouteActions');

module.exports = function () {
    var state = arguments.length <= 0 || arguments[0] === undefined ? false : arguments[0];
    var action = arguments[1];

    switch (action.type) {
        case _RouteActions.Navigate.START:
            return true;
        case _RouteActions.Navigate.END:
            return false;
        default:
            return state;
    }
};