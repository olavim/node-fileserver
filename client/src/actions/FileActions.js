import api from '../api';

export const CHANGE_FILE = 'CHANGE_FILE';
export const SET_FILES = 'SET_FILES';
export const SORT_FILES = 'SORT_FILES';

export const fileInfoFields = ['name', 'modified']

export function fetchFile(path, file) {
	return {
		type: CHANGE_FILE,
		path,
		filetype: file.filetype,
		data: file.data
	}
}

export function setFiles(files) {
	return {
		type: SET_FILES,
		files
	}
}

export function sortFiles(by, asc) {
	return (dispatch) => {
		dispatch({
			type: SORT_FILES,
			sort: {
				by,
				asc
			},
		});
	}
}