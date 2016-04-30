import * as ActionType from '../actions/FileActions';
import { fileInfoFields, NewDirStage } from '../actions/FileActions'

const initialState = {
	path: '/',
	filetype: 'directory',
	data: '',
	newDirStage: NewDirStage.NONE,
	dirData: {
		files: [],
		sort: {
			by: fileInfoFields,
			asc: true
		}
	}
}

const moveElemToStart = (arr, elem) => {
	let a = arr.slice(0);
	a = a.splice(a.indexOf(elem) - 1, 1);
	return [elem, ...a];
}

module.exports = (state = initialState, action) => {
	switch (action.type) {
		case ActionType.CHANGE_FILE:
			return Object.assign({}, state, {path: action.path, filetype: action.filetype, data: action.data});
		case ActionType.SET_FILES:
			return Object.assign({}, state, {
				dirData: Object.assign({}, state.dirData, {files: action.files})
			});
		case ActionType.SORT_FILES:
			let by = moveElemToStart(state.dirData.sort.by, action.sort.by);
			return Object.assign({}, state, {
				dirData: Object.assign({}, state.dirData, {
					sort: Object.assign({}, state.dirData.sort, {by, asc: action.sort.asc})
				})
			});
		case ActionType.NEW_DIR:
			switch (action.stage) {
				case NewDirStage.NONE:
				case NewDirStage.PROMPT:
					return Object.assign({}, state, {newDirStage: action.stage});
				case NewDirStage.CREATE:
					return Object.assign({}, state, {
						newDirStage: NewDirStage.NONE, // reset stage
						dirData: Object.assign({}, state.dirData, {files: [...state.dirData.files, action.file]})
					});
			}
		default:
			return state;
	}
}