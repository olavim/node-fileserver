import React from 'react';
import {Link} from 'react-router';

export default ({
	children,
	to,
	onNavigate
}) => {
	return <Link to={to} onClick={onNavigate} activeClassName="active">{children}</Link>;//
}