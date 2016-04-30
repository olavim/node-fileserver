import React from 'react';
import moment from 'moment';
import FileLink from './FileLink';

export default class FileItem extends React.Component {
	constructor(props) {
		super(props);
		this.state = {active: false}
	}

	onNavigate(link, filetype) {
		this.activate();
		this.props.onNavigate(link, filetype);
	}

	componentDidUpdate() {
		if (!this.props.loading && this.state.active)
			this.setState({active: false});
	}

	activate() {
		this.setState({active: true});
	}

	render() {
		const isDir = file => file.filetype === 'directory';
		let file = this.props.file;
		let link = this.props.link;
		let modified = isDir(file) ? '--' : moment(file.modified).format('DD/MM/YYYY HH:mm');

		return (
			<div className={'item' + (isDir(file) ? ' dir' : '') + (this.state.active ? ' active' : '')}>
				<div className={'name'}>
					<FileLink to={link} onNavigate={this.onNavigate.bind(this, link, file.filetype)}>
						{file.name}
					</FileLink>
				</div>
				<div className="modified">
					{modified}
				</div>
			</div>
		)
	}
}