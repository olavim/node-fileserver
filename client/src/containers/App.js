import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as RouteActions from '../actions/RouteActions';

const App = ({
	children
}) => {
	return (
		<div>{children}</div>
	)
}

module.exports = App;