import React from 'react';
import axios from 'axios';
import FileList from '../components/FileList';
import DirectoryNav from '../components/DirectoryNav';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as RouteActions from '../../../actions/RouteActions';
import * as FileActions from '../../../actions/FileActions';

const isDir = file => file.filetype === 'directory';

const FileView = ({
	currentFile,
	routeActions,
	fileActions
}) => {
	return (
		<div className="file-view">
			<DirectoryNav currentPath={currentFile.path} onNavigate={routeActions.navigate}/>
			{
				isDir(currentFile) ?
					<FileList
						currentFile={currentFile}
						onNavigate={routeActions.navigate}
						onSort={fileActions.sortFiles} /> :
					''
			}
		</div>
	);
}

function mapStateToProps(state) {
	if (!isDir(state.currentFile)) {
		return {
			currentFile: {
				path: state.currentFile.path,
				filetype: state.currentFile.filetype
			},
		}
	}

	let dirData = state.currentFile.dirData;
	let files = dirData.files.slice(0);

	files.sort((a, b) => {
		if (a.filetype !==  b.filetype && (isDir(a) || isDir(b)))
			return isDir(a) ? -1 : 1;

		for (let i = 0; i < dirData.sort.by.length; i++) {
			let field = dirData.sort.by[i];
			let comp = a[field].localeCompare(b[field]);
			if (comp !== 0)
				return dirData.sort.asc ? comp : -comp;
		}

		return 0;
	});

    return {
		currentFile: { 
			path: state.currentFile.path,
			filetype: state.currentFile.filetype,
			dirData: {
				files,
				sort: dirData.sort
			}
		},
    }
}

function mapDispatchToProps(dispatch) {
    return {
		routeActions: bindActionCreators(RouteActions, dispatch),
		fileActions: bindActionCreators(FileActions, dispatch),
    }
}

module.exports = connect(
    mapStateToProps,
    mapDispatchToProps
)(FileView);