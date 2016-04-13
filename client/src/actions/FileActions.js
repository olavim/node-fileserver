import api from '../api';

export const FETCH_FILES = 'FETCH_FILES';

export function fetchFiles(dir) {
	return (dispatch) => {
		api.fetchFiles(dir).then((response) => {
			dispatch({
				type: FETCH_FILES,
				payload: response.data.files
			});
		}).catch((error) => {
			console.error(error.stack);
		});
	}
}