import {batchActions} from 'redux-batched-actions';
import api from '../api';
import {fetchFile, setFiles} from './FileActions';

export const Navigate = {
	START: 'NAVIGATE_START',
	END: 'NAVIGATE_END'
};

export const navigate = path => {
	return dispatch => {
		dispatch({type: Navigate.START});

		api.fetchFileData(path).then(response => {
			console.log(response.data)
			dispatch(
				batchActions([
					fetchFile(path, response.data),
					setFiles(response.data.files),
					{type: Navigate.END}
				])
			);
		}).catch(error => {
			console.log(error.stack);
		});
	};
};
