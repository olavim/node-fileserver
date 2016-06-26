import * as ActionType from '../actions/TooltipActions'
import {Orientation} from '../components/Tooltip';

const initialState = {
	active: false,
	text: '',
	parent: document.body,
	orientation: Orientation.TOP,
	bgcolor: '#fcc'
}

module.exports = (state = initialState, action) => {
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
}