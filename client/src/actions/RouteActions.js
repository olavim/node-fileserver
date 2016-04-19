import api from '../api';
import * as ActionType from './FileActions';
import { changeFile, setFiles } from './FileActions';
import { browserHistory } from 'react-router';
import { batchActions } from 'redux-batched-actions';

export const navigate = (path) => {
	return (dispatch) => {
		api.fetchFiles(path).then((response) => {
			dispatch(
				batchActions([
					changeFile(path, response.data.filetype),
					setFiles(response.data.files)
				])
			);
		}).catch((error) => {
			console.error(error.stack);
		});
	}
}