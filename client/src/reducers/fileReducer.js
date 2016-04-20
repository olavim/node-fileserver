import * as ActionType from '../actions/FileActions';
import { fileInfoFields } from '../actions/FileActions'

const initialState = {
	path: '/',
	filetype: 'directory',
	data: '',
	dirData: {
		files: [],
		sort: {
			by: fileInfoFields,
			asc: true
		}
	}
}

module.exports = (state = initialState, action) => {
	switch (action.type) {
		case ActionType.CHANGE_FILE:
			return {
				path: action.path,
				filetype: action.filetype,
				data: action.data,
				dirData: {
					files: state.dirData.files,
					sort: {
						by: state.dirData.sort.by,
						asc: state.dirData.sort.asc,
					}
				}
			}
		case ActionType.SET_FILES:
			return {
				path: state.path,
				filetype: state.filetype,
				data: state.data,
				dirData: {
					files: action.files,
					sort: {
						by: state.dirData.sort.by,
						asc: state.dirData.sort.asc,
					}
				}
			}
		case ActionType.SORT_FILES:
			let by = state.dirData.sort.by.slice(0);
			by = by.splice(by.indexOf(action.sort.by), 1);
			by = [action.sort.by, ...by];
			
			return {
				path: state.path,
				filetype: state.filetype,
				data: state.data,
				dirData: {
					files: state.dirData.files,
					sort: {
						by,
						asc: action.sort.asc,
					}
				}
			}
		default:
			return state;
	}
}