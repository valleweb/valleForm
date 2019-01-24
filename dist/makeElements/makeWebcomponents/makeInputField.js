Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _normalizeCaseProp = require('../../helpers/normalizeCaseProp');

var _normalizeCaseProp2 = _interopRequireDefault(_normalizeCaseProp);

var _normalizeReadOnly = require('../../helpers/normalizeReadOnly');

var _normalizeReadOnly2 = _interopRequireDefault(_normalizeReadOnly);

var _normalizeRequired = require('../../helpers/normalizeRequired');

var _normalizeRequired2 = _interopRequireDefault(_normalizeRequired);

var _normalizeMask = require('../../helpers/normalizeMask');

var _normalizeMask2 = _interopRequireDefault(_normalizeMask);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

exports['default'] = function (field) {
	var readOnly = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;


	var _fetchData = function _fetchData() {};

	// if(field.campo_novo) {

	// } else {

	// }

	return _react2['default'].createElement('valle-input', _extends({
		'class': 'valleForm__input',
		type: field.type,
		label: field.label,
		placeholder: field.placeholder,
		helpertext: field.helper_text,
		errortext: field.error_text,
		'data-valle-field': field.id,
		maxlength: field.maxlength,
		key: field.id,
		id: field.id,
		pattern: field.pattern
	}, (0, _normalizeRequired2['default'])(field.required), (0, _normalizeReadOnly2['default'])(readOnly ? true : field.readonly), (0, _normalizeCaseProp2['default'])(field['case']), (0, _normalizeMask2['default'])(field.mask)));
};