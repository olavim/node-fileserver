webpackJsonp([1],{

/***/ 568:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(293);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _axios = __webpack_require__(540);
	
	var _axios2 = _interopRequireDefault(_axios);
	
	var _FileList = __webpack_require__(569);
	
	var _FileList2 = _interopRequireDefault(_FileList);
	
	var _reactRedux = __webpack_require__(514);
	
	var _redux = __webpack_require__(520);
	
	var _FileActions = __webpack_require__(564);
	
	var FileActions = _interopRequireWildcard(_FileActions);
	
	var _RouteActions = __webpack_require__(538);
	
	var RouteActions = _interopRequireWildcard(_RouteActions);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
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
	        key: 'render',
	        value: function render() {
	            return _react2.default.createElement(
	                'div',
	                null,
	                _react2.default.createElement(
	                    'h2',
	                    null,
	                    this.props.currentPath
	                ),
	                _react2.default.createElement(_FileList2.default, {
	                    files: this.props.files,
	                    currentPath: this.props.currentPath,
	                    onNavigate: this.props.routeActions.navigate })
	            );
	        }
	    }]);
	
	    return FileView;
	}(_react2.default.Component);
	
	function mapStateToProps(state) {
	    return {
	        currentPath: state.currentPath,
	        files: state.files
	    };
	}
	
	function mapDispatchToProps(dispatch) {
	    return {
	        fileActions: (0, _redux.bindActionCreators)(FileActions, dispatch),
	        routeActions: (0, _redux.bindActionCreators)(RouteActions, dispatch)
	    };
	}
	
	module.exports = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(FileView);

/***/ },

/***/ 569:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _react = __webpack_require__(293);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _path = __webpack_require__(570);
	
	var _path2 = _interopRequireDefault(_path);
	
	var _DirectoryLink = __webpack_require__(572);
	
	var _DirectoryLink2 = _interopRequireDefault(_DirectoryLink);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var FileList = function FileList(_ref) {
		var files = _ref.files;
		var currentPath = _ref.currentPath;
		var onNavigate = _ref.onNavigate;
	
		return _react2.default.createElement(
			'ul',
			null,
			files.map(function (file, index) {
				if (file.type === 'directory') {
					var to = _path2.default.join(currentPath, file.name);
					return _react2.default.createElement(
						'li',
						{ key: index },
						_react2.default.createElement(
							_DirectoryLink2.default,
							{ to: to, onNavigate: onNavigate },
							file.name
						)
					);
				}
	
				return _react2.default.createElement(
					'li',
					{ key: index },
					file.name
				);
			})
		);
	};
	
	module.exports = FileList;

/***/ },

/***/ 572:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _react = __webpack_require__(293);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRouter = __webpack_require__(457);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	module.exports = _react2.default.createClass({
		displayName: 'exports',
	
		_onClick: function _onClick() {
			this.props.onNavigate(this.props.to);
		},
		render: function render() {
			return _react2.default.createElement(
				_reactRouter.Link,
				{ to: this.props.to, onClick: this._onClick },
				this.props.children
			);
		}
	});

/***/ }

});
//# sourceMappingURL=1.bundle.js.map