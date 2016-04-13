import React from 'react';
import axios from 'axios';
import FileList from '../components/FileList';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as FileActions from '../../../actions/FileActions';
import * as RouteActions from '../../../actions/RouteActions';

class FileView extends React.Component {
    render() {
        return (
            <div>
                <h2>{this.props.currentPath}</h2>
                <FileList
                    files={this.props.files}
					currentPath={this.props.currentPath}
                    onNavigate={this.props.routeActions.navigate} />
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
		currentPath: state.currentPath,
        files: state.files
    }
}

function mapDispatchToProps(dispatch) {
    return {
        fileActions: bindActionCreators(FileActions, dispatch),
        routeActions: bindActionCreators(RouteActions, dispatch)
    }
}

module.exports = connect(
    mapStateToProps,
    mapDispatchToProps
)(FileView);