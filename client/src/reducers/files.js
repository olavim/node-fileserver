import * as ActionTypes from '../actions/FileActions';

module.exports = (state = [], action) => {
	switch (action.type) {
		case ActionTypes.FETCH_FILES:
			return action.payload;
		default:
			return state;
	}
}