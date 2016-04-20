import React from 'react';
import hl from 'highlight.js'

export default React.createClass ({
	componentDidMount: function() {
		let editorNode = document.getElementsByClassName('file-editor')[0];
		let codeNode = editorNode.getElementsByTagName('code')[0];
		hl.highlightBlock(codeNode);
	},
	render: function() {
		return (
			<div className="file-editor">
				<pre><code className={this.props.currentFile.filetype}>
					{this.props.currentFile.data}
				</code></pre>
			</div>
		);
	}
});