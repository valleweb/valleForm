Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _normalizeCaseProp = require('./normalizeCaseProp');

var _normalizeCaseProp2 = _interopRequireDefault(_normalizeCaseProp);

var _normalizeFieldName = require('./normalizeFieldName');

var _normalizeFieldName2 = _interopRequireDefault(_normalizeFieldName);

var _normalizeReadOnly = require('./normalizeReadOnly');

var _normalizeReadOnly2 = _interopRequireDefault(_normalizeReadOnly);

var _normalizeRequired = require('./normalizeRequired');

var _normalizeRequired2 = _interopRequireDefault(_normalizeRequired);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

exports['default'] = function (field) {
	var _extends2;

	var readOnly = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;


	var _fetchData = function _fetchData() {};

	// if(field.campo_novo) {

	// } else {

	// }

	return _react2['default'].createElement('valle-input', _extends((_extends2 = {
		'class': 'valleForm__input',
		type: 'text',
		label: field.label,
		value: field.value,
		'data-valle-field': (0, _normalizeFieldName2['default'])(field.name)
	}, _defineProperty(_extends2, 'type', field.type.toLowerCase()), _defineProperty(_extends2, 'maxlength', field.maxlength), _defineProperty(_extends2, 'key', field.id), _defineProperty(_extends2, 'id', field.id), _defineProperty(_extends2, 'pattern', field.pattern == ' ' ? null : field.pattern), _extends2), (0, _normalizeRequired2['default'])(field.required), (0, _normalizeReadOnly2['default'])(readOnly), (0, _normalizeCaseProp2['default'])(field['case'])));
};