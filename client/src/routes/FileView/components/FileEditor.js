import React from 'react';
var Worker = require('worker!../../../workers/highlightWorker');

export default class FileEditor extends React.Component {
	constructor(props) {
		super(props);
		this.state = {data: escapeHtml(props.currentFile.data), highlighted: false};
	}

	componentDidMount() {
		let worker = new Worker;
		worker.onmessage = e => { this.setState({data: e.data, highlighted: true}); }
		worker.postMessage([this.props.currentFile.data, this.props.currentFile.filetype]);
	}

	render() {
		return (
			<div className="file-editor">
				<pre>
					<code className={this.props.currentFile.filetype}
					      dangerouslySetInnerHTML={{__html: this.state.data}}/>
				</pre>
			</div>
		)
	}
}

function escapeHtml(unsafe) {
	return unsafe
		.replace(/&/g, "&amp;")
		.replace(/</g, "&lt;")
		.replace(/>/g, "&gt;")
		.replace(/"/g, "&quot;")
		.replace(/'/g, "&#039;");
}

