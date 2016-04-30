import React from 'react';
import axios from 'axios';
import FileList from './FileList';
import FileEditor from '../components/FileEditor';
import DirectoryNav from '../components/DirectoryNav';
import DirectoryControl from './DirectoryControl';
import Tooltip from '../../../components/Tooltip'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as RouteActions from '../../../actions/RouteActions';
import * as FileActions from '../../../actions/FileActions';
import * as TooltipActions from '../../../actions/TooltipActions';
import * as fileTools from '../../../tools/fileTools'

const FileView = ({
	loading,
	currentFile,
	onNavigate,
	tooltip
}) => {
	let isDir = fileTools.isDir(currentFile);
	return (
		<div className="file-view">
			<div className="top-bar">
				<DirectoryNav currentPath={currentFile.path} onNavigate={onNavigate}/>
				{
					isDir ?
						<DirectoryControl /> : ''
				}
			</div>
			{
				isDir ?
					<FileList
						currentFile={currentFile}
						onNavigate={onNavigate}
						loading={loading} /> :
					<FileEditor currentFile={currentFile} />
			}
		</div>
	);
}

function mapStateToProps(state) {
	if (!fileTools.isDir(state.currentFile)) {
		return {
			currentFile: {
				path: state.currentFile.path,
				filetype: state.currentFile.filetype,
				data: state.currentFile.data
			},
		}
	}

	let dirData = state.currentFile.dirData;
	let files = dirData.files.slice(0);

	fileTools.sortFiles(files, dirData.sort.asc, dirData.sort.by);

    return {
		tooltip: state.tooltip,
		loading: state.loading,
		currentFile: { 
			path: state.currentFile.path,
			filetype: state.currentFile.filetype,
			newDirStage: state.currentFile.newDirStage,
			dirData: {
				files,
				sort: dirData.sort
			}
		},
    }
}

function mapDispatchToProps(dispatch) {
    return {
		onNavigate: bindActionCreators(RouteActions, dispatch).navigate
    }
}

module.exports = connect(
    mapStateToProps,
    mapDispatchToProps
)(FileView);