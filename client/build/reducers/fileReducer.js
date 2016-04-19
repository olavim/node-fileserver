'use strict';

var _FileActions = require('../actions/FileActions');

var ActionType = _interopRequireWildcard(_FileActions);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var initialState = {
	path: '/',
	filetype: 'directory',
	dirData: {
		files: [],
		sort: {
			by: _FileActions.fileInfoFields,
			asc: true
		}
	}
};

module.exports = function () {
	var state = arguments.length <= 0 || arguments[0] === undefined ? initialState : arguments[0];
	var action = arguments[1];

	switch (action.type) {
		case ActionType.CHANGE_FILE:
			return {
				path: action.path,
				filetype: action.filetype,
				dirData: {
					files: state.dirData.files,
					sort: {
						by: state.dirData.sort.by,
						asc: state.dirData.sort.asc
					}
				}
			};
		case ActionType.SET_FILES:
			return {
				path: state.path,
				filetype: state.filetype,
				dirData: {
					files: action.files,
					sort: {
						by: state.dirData.sort.by,
						asc: state.dirData.sort.asc
					}
				}
			};
		case ActionType.SORT_FILES:
			var by = state.dirData.sort.by.slice(0);
			by = by.splice(by.indexOf(action.sort.by), 1);
			by = [action.sort.by].concat(_toConsumableArray(by));

			return {
				path: state.path,
				filetype: state.filetype,
				dirData: {
					files: state.dirData.files,
					sort: {
						by: by,
						asc: action.sort.asc
					}
				}
			};
		default:
			return state;
	}
};