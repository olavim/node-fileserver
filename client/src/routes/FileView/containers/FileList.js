import React from 'react';
import path from 'path';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Heading from './../components/Heading';
import FileItem from './../components/FileItem';
import { NewDirStage } from '../../../actions/FileActions'
import { isValidFilename } from '../../../tools/fileTools'
import * as FileActions from '../../../actions/FileActions';
import * as TooltipActions from '../../../actions/TooltipActions';
import { Orientation } from '../../../components/Tooltip';

class FileList extends React.Component {
	constructor(props) {
		super(props);
		this.onNewDir = this.onNewDir.bind(this);
		this.onInputKeyPress = this.onInputKeyPress.bind(this);
		this.onInputBlur = this.onInputBlur.bind(this);
	}

	onNewDir(e) {
		let val = e.target.value;
		if (isValidFilename(val)) {
			this.props.onNewDir(this.props.currentFile.path, e.target.value);
			this.props.hideTooltip();
		} else {
			this.props.showTooltip(e.target, 'Invalid filename.', Orientation.RIGHT, '#900');
		}
	}

	onInputBlur(e) {
		this.onNewDir(e)
	}

	onInputKeyPress(e) {
		if (e.charCode === 13)
			this.onNewDir(e);
	}

	render() {
		const isDir = file => file.filetype === 'directory';

		let currentFile = this.props.currentFile;
		let dirname = isDir(currentFile) ? currentFile.path : path.dirname(currentFile.path);

		return (
			<div className="file-list">
				<div className="header">
					<Heading sort={currentFile.dirData.sort} onSort={this.props.onSort} heading="Name"/>
					<Heading sort={currentFile.dirData.sort} onSort={this.props.onSort} heading="Modified"/>
				</div>
				<div className="file-item-list">
					{
						currentFile.dirData.files.map((file, index) => {
							let link = path.join(dirname, file.name) + (isDir(file) ? '/' : '');
							return <FileItem key={index}
											 link={link}
											 file={file}
											 onNavigate={this.props.onNavigate} 
											 loading={this.props.loading} />
						})
					}
					{
						currentFile.newDirStage === NewDirStage.PROMPT ?
							<div className="item dir">
								<div className="name">
									<input type="text"
										   ref={c => c ? c.focus() : {}}
										   onBlur={this.onInputBlur}
										   onKeyPress={this.onInputKeyPress}/>
								</div>
							</div> :
							''
					}
				</div>
			</div>
		)
	}
}

function mapDispatchToProps(dispatch) {
	return {
		onSort: bindActionCreators(FileActions, dispatch).sortFiles,
		onNewDir: bindActionCreators(FileActions, dispatch).newDirectory,
		showTooltip: bindActionCreators(TooltipActions, dispatch).showTooltip,
		hideTooltip: bindActionCreators(TooltipActions, dispatch).hideTooltip,
	}
}

export default connect(
	null,
	mapDispatchToProps
)(FileList)