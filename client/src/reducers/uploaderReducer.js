import * as ActionType from '../actions/UploaderActions'

let initialState = {
	active: false
}

module.exports = (state = initialState, action) => {
	switch (action.type) {
		case ActionType.SET_ACTIVE:
			return Object.assign({}, state, {active: action.active});
		default:
			return state;
	}
}