'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _axios = require('axios');

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = _react2.default.createClass({
    displayName: 'exports',

    getInitialState: function getInitialState() {
        return {
            path: this.props.params.splat,
            files: []
        };
    },
    componentWillMount: function componentWillMount() {
        var _this = this;

        this.retrieveFiles(this.state.path, function (err, data) {
            console.log(_this.props);
            if (err) {
                console.log(err);
                return;
            }

            var files = data.files;
            _this.setState({ files: files });
        });
    },
    retrieveFiles: function retrieveFiles(path, callback) {
        console.log(path);
        (0, _axios2.default)({
            method: 'get',
            url: 'http://localhost:3000/files',
            withCredentials: true,
            responseType: 'json'
        }).then(function (response) {
            callback(null, response.data);
        }).catch(function (err) {
            console.log(err);
            callback(err);
        });
    },
    render: function render() {
        return _react2.default.createElement(
            'div',
            null,
            this.props.children
        );
    }
});