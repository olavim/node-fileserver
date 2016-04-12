'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _axios = require('axios');

var _axios2 = _interopRequireDefault(_axios);

var _FileList = require('../components/FileList');

var _FileList2 = _interopRequireDefault(_FileList);

var _reactRedux = require('react-redux');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var FileView = function (_React$Component) {
    _inherits(FileView, _React$Component);

    function FileView() {
        _classCallCheck(this, FileView);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(FileView).apply(this, arguments));
    }

    _createClass(FileView, [{
        key: 'componentWillMount',
        value: function componentWillMount() {
            this.retrieveFiles(this.props.path.substr(5));
        }
    }, {
        key: 'retrieveFiles',
        value: function retrieveFiles(path) {
            var _this2 = this;

            (0, _axios2.default)({
                method: 'get',
                url: 'http://localhost:3000/files' + path,
                withCredentials: true,
                responseType: 'json'
            }).then(function (response) {
                _this2.setState({ files: response.data.files });
            }).catch(function (err) {
                console.error(err.stack);
            });
        }
    }, {
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
            var _this3 = this;

            var routeChanged = nextProps.location !== this.props.location;
            if (routeChanged) {
                this.setState({ path: nextProps.location.pathname }, function (err, data) {
                    _this3.retrieveFiles(_this3.state.path.substr(5));
                });
            }
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
                    'h2',
                    null,
                    this.props.path
                ),
                _react2.default.createElement(_FileList2.default, { files: this.props.files, path: this.props.path })
            );
        }
    }]);

    return FileView;
}(_react2.default.Component);

var mapStateToProps = function mapStateToProps(state) {
    return {
        path: state.path,
        files: state.files
    };
};

module.exports = (0, _reactRedux.connect)(mapStateToProps)(FileView);