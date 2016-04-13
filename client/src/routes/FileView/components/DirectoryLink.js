import React from 'react';
import { Link } from 'react-router';

module.exports = React.createClass({
	_onClick: function() {
		this.props.onNavigate(this.props.to);
	},
	render: function() {
		return <Link to={this.props.to} onClick={this._onClick}>{this.props.children}</Link>;
	}
})