import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as UploaderActions from '../../../actions/UploaderActions';
import FileInputButton from '../components/FileInputButton';
import CancelButton from '../components/CancelButton';

class Uploader extends React.Component {
	onClick(e) {
		if (e.target.className === 'uploader')
			this.props.hideUploader();
	}

	render() {
		let style = {
			display: this.props.active ? 'block' : 'none'
		}

		return (
			<div className="uploader" style={style} onClick={this.onClick.bind(this)}>
				<div className="container">
					<div className="header">
						<span>Upload files</span>
					</div>
					<div className="content">
						<p>
							Choose files to upload. You can select multiple files at the same time.
						</p>
						<div className="buttons">
							<FileInputButton />
							<CancelButton onAction={this.props.hideUploader} />
						</div>
					</div>
				</div>
			</div>
		)
	}
}

function mapStateToProps(state) {
	return {
		active: state.uploader.active,
	}
}

function mapDispatchToProps(dispatch) {
	return {
		hideUploader: bindActionCreators(UploaderActions, dispatch).hideUploader
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Uploader);