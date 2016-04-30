'use strict';

var _FileActions = require('../actions/FileActions');

var ActionType = _interopRequireWildcard(_FileActions);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var initialState = {
	path: '/',
	filetype: 'directory',
	data: '',
	newDirStage: _FileActions.NewDirStage.NONE,
	dirData: {
		files: [],
		sort: {
			by: _FileActions.fileInfoFields,
			asc: true
		}
	}
};

var moveElemToStart = function moveElemToStart(arr, elem) {
	var a = arr.slice(0);
	a = a.splice(a.indexOf(elem) - 1, 1);
	return [elem].concat(_toConsumableArray(a));
};

module.exports = function () {
	var state = arguments.length <= 0 || arguments[0] === undefined ? initialState : arguments[0];
	var action = arguments[1];

	switch (action.type) {
		case ActionType.CHANGE_FILE:
			return Object.assign({}, state, { path: action.path, filetype: action.filetype, data: action.data });
		case ActionType.SET_FILES:
			return Object.assign({}, state, {
				dirData: Object.assign({}, state.dirData, { files: action.files })
			});
		case ActionType.SORT_FILES:
			var by = moveElemToStart(state.dirData.sort.by, action.sort.by);
			return Object.assign({}, state, {
				dirData: Object.assign({}, state.dirData, {
					sort: Object.assign({}, state.dirData.sort, { by: by, asc: action.sort.asc })
				})
			});
		case ActionType.NEW_DIR:
			switch (action.stage) {
				case _FileActions.NewDirStage.NONE:
				case _FileActions.NewDirStage.PROMPT:
					return Object.assign({}, state, { newDirStage: action.stage });
				case _FileActions.NewDirStage.CREATE:
					return Object.assign({}, state, {
						newDirStage: _FileActions.NewDirStage.NONE, // reset stage
						dirData: Object.assign({}, state.dirData, { files: [].concat(_toConsumableArray(state.dirData.files), [action.file]) })
					});
			}
		default:
			return state;
	}
};