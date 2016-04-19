import React from 'react';
import FileLink from './FileLink';

export default ({
	currentPath,
	onNavigate
}) => {

	// remove leading and trailing slashes and split the resulting path to directories
	let dirs = currentPath.replace(/^\/|\/$/g, '').split('/');
	return (
		<ul className="directory-nav">
			{
				dirs.map((dir, index) => {
					let link = '/' + dirs.slice(0, index + 1).join('/');
					return (
						<li key={index}>
							<FileLink to={link} onNavigate={onNavigate.bind(this, link, 'directory')}>{dir}</FileLink>
						</li>
					)
				})
			}
		</ul>
	);
}