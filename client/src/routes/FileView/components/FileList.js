import React from 'react';
import path from 'path';
import DirectoryLink from './DirectoryLink';

const FileList = ({
	files,
	currentPath,
	onNavigate
}) => {
	return (
		<ul>
			{
				files.map((file, index) => {
					if (file.type === 'directory') {
						let to = path.join(currentPath, file.name);
						return (
							<li key={index}>
								<DirectoryLink to={to} onNavigate={onNavigate}>
									{file.name}
								</DirectoryLink>
							</li>
						);
					}

					return <li key={index}>{file.name}</li>;
				})
			}
		</ul>
	)
}

module.exports = FileList;