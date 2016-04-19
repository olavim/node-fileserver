'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (_ref) {
	var sort = _ref.sort;
	var heading = _ref.heading;
	var onSort = _ref.onSort;

	var getSortDir = function getSortDir(by) {
		return sort.by[0] === by ? !sort.asc : sort.asc;
	};
	var lheading = heading.toLowerCase();
	var className = 'heading ' + lheading;
	var onClick = onSort.bind(undefined, lheading, getSortDir(lheading));

	return _react2.default.createElement(
		'div',
		{ className: className, onClick: onClick },
		heading,
		sort.by[0] === lheading ? _react2.default.createElement('span', { className: sort.asc ? 'asc' : 'desc' }) : ''
	);
};