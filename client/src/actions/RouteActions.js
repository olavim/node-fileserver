import api from '../api';
import * as ActionType from './FileActions';
import { fetchFile, setFiles } from './FileActions';
import { browserHistory } from 'react-router';
import { batchActions } from 'redux-batched-actions';

export const Navigate = {
	START: 'NAVIGATE_START',
	END: 'NAVIGATE_END',
}

export const navigate = (path) => {
	return (dispatch) => {
		dispatch({type: Navigate.START});

		api.fetchFileData(path).then((response) => {
			dispatch(
				batchActions([
					fetchFile(path, response.data),
					setFiles(response.data.files),
					{type: Navigate.END}
				])
			);
		}).catch((error) => {
			console.error(error.stack);
		});
	}
}