import React from 'react';
import path from 'path';
import FileLink from './FileLink';
import Heading from './Heading';
import moment from 'moment';

export default ({
	currentFile,
	onNavigate,
	onSort
}) => {
	const isDir = file => file.filetype === 'directory';
	let dirname = isDir(currentFile) ? currentFile.path : path.dirname(currentFile.path);
	let sort = currentFile.dirData.sort;

	return (
		<div className="file-list">
			<div className="header">
				<Heading sort={sort} onSort={onSort} heading="Name" />
				<Heading sort={sort} onSort={onSort} heading="Modified" />
			</div>
			<div className="file-item-list">
				{
					currentFile.dirData.files.map((file, index) => {
						let modified = isDir(file) ? '--' : moment(file.modified).format('DD/MM/YYYY HH:mm');
						let to = path.join(dirname, file.name) + (isDir(file) ? '/' : '');

						return (
							<div key={index} className={'item' + (isDir(file) ? ' dir' : '')}>
								<div className={'name'}>
									<FileLink to={to} onNavigate={onNavigate.bind(this, to, file.filetype)}>
										{file.name}
									</FileLink>
								</div>
								<div className="modified">
									{modified}
								</div>
							</div>
						)
					})
				}
			</div>
		</div>
	)
}