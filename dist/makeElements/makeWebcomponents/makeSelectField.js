Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _makeOptions = require('./makeOptions');

var _makeOptions2 = _interopRequireDefault(_makeOptions);

var _normalizeReadOnly = require('../../helpers/normalizeReadOnly');

var _normalizeReadOnly2 = _interopRequireDefault(_normalizeReadOnly);

var _normalizeRequired = require('../../helpers/normalizeRequired');

var _normalizeRequired2 = _interopRequireDefault(_normalizeRequired);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

exports['default'] = function (field) {
	var customClass = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
	var readOnly = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
	var editable = arguments[3];
	var _id = arguments[4];


	//let select = React.createRef();

	//useEffect(() => {
	//    select.current.value = field.value;
	//}, [])

	var isDisabled = void 0;

	if (editable) {
		// Verify editable mode
		isDisabled = readOnly ? true : field.is_PK || field.readonly;
	} else {
		isDisabled = readOnly ? true : field.readonly;
	}

	return _react2['default'].createElement(
		'valle-select',
		_extends({
			// ref = { select }
			value: field.value ? field.value : null,
			'class': 'valleForm__select ' + String(customClass),
			label: field.label,
			'data-valle-field': '' + String(field.id),
			placeholder: field.placeholder,
			helpertext: field.helper_text,
			errortext: field.error_text,
			key: String(_id) + '_' + String(field.id),
			id: '' + String(field.id),
			tooltip: field.description,
			tooltippos: 'top-right',
			tooltiplength: 'large'
		}, (0, _normalizeRequired2['default'])(field.required), (0, _normalizeReadOnly2['default'])(isDisabled)),
		(0, _makeOptions2['default'])(field.options)
	);
};