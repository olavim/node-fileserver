import React from 'react';
import Tooltip from '../components/Tooltip'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as RouteActions from '../actions/RouteActions';

const App = ({
	children,
	tooltip
}) => {
	return (
		<div>
			{children}
			<Tooltip active={tooltip.active}
					 text={tooltip.text}
					 parent={tooltip.parent}
					 orientation={tooltip.orientation}
					 bgcolor={tooltip.bgcolor} />
		</div>
	)
}

function mapStateToProps(state) {
	return {
		tooltip: state.tooltip
	}
}

module.exports = connect(
	mapStateToProps
)(App);