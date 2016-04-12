import * as ActionTypes from '../actions/routeAction';

module.exports = (state = { path: '/', files: [] }, action) => {
    switch (action.type) {
        case ActionTypes.NAVIGATE:
            return Object.assign({}, state, {
                path: action.text
            });
        default:
            return state;
    }
}