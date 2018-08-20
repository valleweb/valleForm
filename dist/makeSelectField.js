Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _makeOptions = require('./makeOptions');

var _makeOptions2 = _interopRequireDefault(_makeOptions);

var _normalizeFieldName = require('./normalizeFieldName');

var _normalizeFieldName2 = _interopRequireDefault(_normalizeFieldName);

var _normalizeReadOnly = require('./normalizeReadOnly');

var _normalizeReadOnly2 = _interopRequireDefault(_normalizeReadOnly);

var _normalizeRequired = require('./normalizeRequired');

var _normalizeRequired2 = _interopRequireDefault(_normalizeRequired);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

exports['default'] = function (field) {
	var customClass = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
	var readOnly = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

	var _field$element_option = field.element_options[0].split(';;'),
	    _field$element_option2 = _slicedToArray(_field$element_option, 2),
	    val = _field$element_option2[0],
	    txt = _field$element_option2[1]; // Normalize the API result (split value and text)

	return _react2['default'].createElement(
		'valle-select',
		_extends({
			'class': 'valleForm__select ' + String(customClass),
			label: field.label,
			'data-valle-field': (0, _normalizeFieldName2['default'])(field.name),
			maxlength: field.maxlength,
			placeholder: txt,
			value: field.value,
			key: field.id,
			id: field.id
		}, (0, _normalizeRequired2['default'])(field.required), (0, _normalizeReadOnly2['default'])(readOnly)),
		(0, _makeOptions2['default'])(field.element_options)
	);
};