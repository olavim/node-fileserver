'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _axios = require('axios');

var _axios2 = _interopRequireDefault(_axios);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

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
            console.log(err);
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
        var _this3 = this;

        var fileComponents = this.state.files.map(function (file, index) {
            if (file.type === 'directory') {
                var p = _path2.default.join(_this3.state.path, file.name);
                return _react2.default.createElement(
                    'li',
                    { key: index },
                    _react2.default.createElement(
                        _reactRouter.Link,
                        { to: p },
                        file.name
                    )
                );
            }

            return _react2.default.createElement(
                'li',
                { key: index },
                file.name
            );
        });

        return _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement(
                'h2',
                null,
                this.state.path
            ),
            _react2.default.createElement(
                'ul',
                null,
                fileComponents
            )
        );
    }
});