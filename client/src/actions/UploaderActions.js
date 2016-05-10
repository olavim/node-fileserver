export const SET_ACTIVE = 'SET_ACTIVE';

export function showUploader() {
	return (dispatch) => {
		dispatch({
			type: SET_ACTIVE,
			active: true
		})
	}
}

export function hideUploader() {
	return (dispatch) => {
		dispatch({
			type: SET_ACTIVE,
			active: false
		})
	}
}