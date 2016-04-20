"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectDestructuringEmpty(obj) { if (obj == null) throw new TypeError("Cannot destructure undefined"); }

exports.default = function (_ref) {
	_objectDestructuringEmpty(_ref);

	return _react2.default.createElement(
		"div",
		{ className: "control" },
		_react2.default.createElement("span", { className: "new-file", "data-toggle": "tooltip", title: "Upload a file" }),
		_react2.default.createElement("span", { className: "new-folder", "data-toggle": "tooltip", title: "Create a new folder" })
	);
};