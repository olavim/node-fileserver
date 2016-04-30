export const TOOLTIP_SHOW = 'TOOLTIP_SHOW';
export const TOOLTIP_HIDE = 'TOOLTIP_HIDE';

export function showTooltip(parent, text, orientation, bgcolor) {
	return (dispatch) => {
		dispatch({
			type: TOOLTIP_SHOW,
			parent,
			text,
			orientation,
			bgcolor
		})
	}
}

export function hideTooltip() {
	return (dispatch) => {
		dispatch({
			type: TOOLTIP_HIDE,
		})
	}
}