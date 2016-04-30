import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as FileActions from '../../../actions/FileActions';
import * as TooltipActions from '../../../actions/TooltipActions';
import { Orientation } from '../../../components/Tooltip';

class DirectoryControl extends React.Component {
	constructor(props) {
		super(props);
	}

	onMouseOver(e) {
		this.props.showTooltip(e.target, e.target.getAttribute("data-title"), Orientation.TOP, '#444');
	}

	onMouseOut(e) {
		this.props.hideTooltip();
	}

	render() {
		return (
			<div className="control">
				<span className="new-file"
					  data-title="Upload..."
					  onMouseOver={this.onMouseOver.bind(this)}
					  onMouseOut={this.onMouseOut.bind(this)} />
				<span className="new-folder"
					  data-title="New folder"
					  onMouseOver={this.onMouseOver.bind(this)}
					  onMouseOut={this.onMouseOut.bind(this)}
					  onClick={this.props.onNewDir} />
			</div>
		)
	}
}

function mapDispatchToProps(dispatch) {	
	return {
		onNewDir: bindActionCreators(FileActions, dispatch).newDirectoryPrompt,
		showTooltip: bindActionCreators(TooltipActions, dispatch).showTooltip,
		hideTooltip: bindActionCreators(TooltipActions, dispatch).hideTooltip,

	}
}

export default connect(
	null,
	mapDispatchToProps
)(DirectoryControl)