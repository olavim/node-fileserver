'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _axios = require('axios');

var _axios2 = _interopRequireDefault(_axios);

var _FileList = require('./FileList');

var _FileList2 = _interopRequireDefault(_FileList);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = _react2.default.createClass({
    displayName: 'exports',

    getInitialState: function getInitialState() {
        return {
            path: this.props.location.pathname,
            files: []
        };
    },
    componentWillMount: function componentWillMount() {
        this.retrieveFiles(this.state.path.substr(5));
    },
    retrieveFiles: function retrieveFiles(path) {
        var _this = this;

        (0, _axios2.default)({
            method: 'get',
            url: 'http://localhost:3000/files' + path,
            withCredentials: true,
            responseType: 'json'
        }).then(function (response) {
            _this.setState({ files: response.data.files });
        }).catch(function (err) {
            console.error(err.stack);
        });
    },
    componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
        var _this2 = this;

        var routeChanged = nextProps.location !== this.props.location;
        if (routeChanged) {
            this.setState({ path: nextProps.location.pathname }, function (err, data) {
                _this2.retrieveFiles(_this2.state.path.substr(5));
            });
        }
    },
    render: function render() {
        var path = this.state.path;
        var files = this.state.files;

        return _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement(
                'h2',
                null,
                path
            ),
            _react2.default.createElement(_FileList2.default, { files: files, path: path })
        );
    }
});