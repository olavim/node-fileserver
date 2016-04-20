import api from '../api';
import * as ActionType from './FileActions';
import { fetchFile, setFiles } from './FileActions';
import { browserHistory } from 'react-router';
import { batchActions } from 'redux-batched-actions';

export const navigate = (path) => {
	return (dispatch) => {
		api.fetchFileData(path).then((response) => {
			dispatch(
				batchActions([
					fetchFile(path, response.data),
					setFiles(response.data.files)
				])
			);
		}).catch((error) => {
			console.error(error.stack);
		});
	}
}