import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as RouteActions from '../actions/RouteActions';

class App extends React.Component {
	constructor(props) {
		super(props);
		props.routeActions.navigate(props.location.pathname);
	}

	componentWillReceiveProps(props) {
		props.routeActions.navigate(props.location.pathname);
	}

    render() {
        return (
            <div>
                {this.props.children}
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        currentPath: state.currentPath
    }
}

function mapDispatchToProps(dispatch) {
    return {
        routeActions: bindActionCreators(RouteActions, dispatch)
    }
}

module.exports = connect(
    mapStateToProps,
    mapDispatchToProps
)(App);