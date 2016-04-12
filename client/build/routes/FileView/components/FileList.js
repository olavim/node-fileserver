'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _reactRouter = require('react-router');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = _react2.default.createClass({
    displayName: 'exports',

    render: function render() {
        var files = this.props.files;
        var dir = this.props.path;

        var fileComponents = files.map(function (file, index) {
            if (file.type === 'directory') {
                var p = _path2.default.join(dir, file.name);
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
            'ul',
            null,
            fileComponents
        );
    }
});