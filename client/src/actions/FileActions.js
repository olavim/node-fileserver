import api from '../api';
import path from 'path';

export const CHANGE_FILE = 'CHANGE_FILE';
export const SET_FILES = 'SET_FILES';
export const SORT_FILES = 'SORT_FILES';
export const NEW_DIR = 'NEW_DIR';

export const fileInfoFields = ['name', 'modified'];
export const NewDirStage = {
	NONE: 0,		// new directory isn't being made
	PROMPT: 1,		// waiting for directory to be named
};

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

export function newDirectoryPrompt() {
	return (dispatch) => {
		dispatch({
			type: NEW_DIR,
			stage: NewDirStage.PROMPT
		});
	}
}

export function newDirectory(currentDir, name) {
	return (dispatch) => {
		if (name) {
			api.newDirectory(currentDir, name).then(response => {
				dispatch({
					type: NEW_DIR,
					stage: NewDirStage.CREATE,
					file: {
						name,
						path: path.join(currentDir, name),
						filetype: 'directory'
					}
				});
			}).catch(err => {
				console.log(err);
			})
		} else {
			dispatch({
				type: NEW_DIR,
				stage: NewDirStage.NONE,
			});
		}
	}
}