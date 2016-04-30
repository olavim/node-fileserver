import { Navigate } from '../actions/RouteActions';

module.exports = (state = false, action) => {
    switch (action.type) {
        case Navigate.START:
            return true;
        case Navigate.END:
            return false;
        default:
            return state;
    }
}