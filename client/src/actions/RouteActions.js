import api from '../api';
import { fetchFiles } from './FileActions';

export const NAVIGATE = 'NAVIGATE';

export const navigate = (text) => {
	return (dispatch) => {
		dispatch({
			type: NAVIGATE,
			text
		});

		fetchFiles(text.substr(5))(dispatch);
	}
}