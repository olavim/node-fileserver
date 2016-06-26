import React from 'react';

export default ({
	sort,
	heading,
	onSort
}) => {
	const getSortDir = by => sort.by[0] === by ? !sort.asc : sort.asc;
	let lheading = heading.toLowerCase();
	let className = 'heading ' + lheading;
	let onClick = onSort.bind(this, lheading, getSortDir(lheading));

	return (
		<div className={className} onClick={onClick}>
			{heading}
			{sort.by[0] === lheading ? <span className={sort.asc ? 'asc' : 'desc'}/> : ''}
		</div>
	)
}