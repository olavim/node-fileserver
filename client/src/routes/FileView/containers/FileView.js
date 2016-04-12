import React from 'react';
import axios from 'axios';
import FileList from '../components/FileList';
import { connect } from 'react-redux';

class FileView extends React.Component {
    componentWillMount() {
        this.retrieveFiles(this.props.path.substr(5));
    }

    retrieveFiles(path) {
        axios({
            method: 'get',
            url: 'http://localhost:3000/files' + path,
            withCredentials: true,
            responseType: 'json'
        }).then((response) => {
            this.setState({files: response.data.files});
        }).catch((err) => {
            console.error(err.stack);
        });
    }

    componentWillReceiveProps(nextProps) {
        const routeChanged = nextProps.location !== this.props.location
        if (routeChanged) {
            this.setState({path: nextProps.location.pathname}, (err, data) => {
                this.retrieveFiles(this.state.path.substr(5));
            });
        }
    }

    render() {
        return (
            <div>
                <h2>{this.props.path}</h2>
                <FileList files={this.props.files} path={this.props.path} />
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        path: state.path,
        files: state.files
    }
}

module.exports = connect(
    mapStateToProps
)(FileView);