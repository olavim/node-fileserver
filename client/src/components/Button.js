import React from 'react';

export default ({
	onAction,
	className,
	children
}) => {
	return (
		<a className={'button ' + className} onClick={onAction}>
			{children}
		</a>
	)
}