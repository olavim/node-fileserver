import * as ActionTypes from '../actions/RouteActions';

module.exports = (state = '/', action) => {
    switch (action.type) {
        case ActionTypes.NAVIGATE:
            return action.text;
        default:
            return state;
    }
}