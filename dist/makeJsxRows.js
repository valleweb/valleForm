Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _isSelect = require('./isSelect');

var _isSelect2 = _interopRequireDefault(_isSelect);

var _makeInputField = require('./makeInputField');

var _makeInputField2 = _interopRequireDefault(_makeInputField);

var _makeSelectField = require('./makeSelectField');

var _makeSelectField2 = _interopRequireDefault(_makeSelectField);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

exports['default'] = function (rows) {
	var filterByVisibleScreen = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
	var readOnly = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
	return rows.map(function (row, index) {

		var $fields = row.filter(function (field) {
			return field.visible;
		}).filter(function (field) {
			return isVisibleScreen(field, filterByVisibleScreen);
		}).map(function (field) {
			return (0, _isSelect2['default'])(field.element) ? resolveSelectSize(row, field, readOnly) : (0, _makeInputField2['default'])(field, readOnly);
		});

		return _react2['default'].createElement(
			'div',
			{ className: 'valleForm__row', key: index },
			' ',
			$fields,
			' '
		);
	});
};

var isVisibleScreen = function isVisibleScreen(field, filterByVisibleScreen) {
	return filterByVisibleScreen ? field.visible_screen : true;
};

var resolveSelectSize = function resolveSelectSize(row, field) {
	var readOnly = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

	return row.length === 1 ? // Verify if the select is a single field on row.
	(0, _makeSelectField2['default'])(field, 'valleForm__select--big', readOnly) : (0, _makeSelectField2['default'])(field, '', readOnly);
};