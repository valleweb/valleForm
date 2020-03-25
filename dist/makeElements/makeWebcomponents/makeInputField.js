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

var _shortid = require('shortid');

var _shortid2 = _interopRequireDefault(_shortid);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

exports['default'] = function (field) {
	var readOnly = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;


	var _fetchData = function _fetchData() {}
	// setMoal(true)


	// if(field.campo_novo) {

	// } else {

	// }

	;var customDescriptionStyle = field.label == 'Descrição' ? 'valleForm__input--description' : '';

	// const $search = (
	// 	<button className = 'valleForm__input__button'>
	// 		<svg className = 'valleForm__input__icon' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M23.822 20.88l-6.353-6.354c.93-1.465 1.467-3.2 1.467-5.059.001-5.219-4.247-9.467-9.468-9.467s-9.468 4.248-9.468 9.468c0 5.221 4.247 9.469 9.468 9.469 1.768 0 3.421-.487 4.839-1.333l6.396 6.396 3.119-3.12zm-20.294-11.412c0-3.273 2.665-5.938 5.939-5.938 3.275 0 5.94 2.664 5.94 5.938 0 3.275-2.665 5.939-5.94 5.939-3.274 0-5.939-2.664-5.939-5.939z"/></svg>
	// 	</button>
	// )

	return (
		// <span className = 'valleForm__input__container'>

		_react2['default'].createElement('valle-input', _extends({
			value: field.value ? field.value : null,
			'class': 'valleForm__input ' + customDescriptionStyle,
			type: field.type,
			label: field.label,
			placeholder: field.placeholder,
			helpertext: field.helper_text,
			errortext: field.error_text,
			'data-valle-field': field.id,
			maxlength: field.maxlength,
			key: _shortid2['default'].generate(),
			id: field.id
			// onBlur = { _fetchData }
			, pattern: field.pattern
		}, (0, _normalizeRequired2['default'])(field.required), (0, _normalizeReadOnly2['default'])(readOnly ? true : field.readonly), (0, _normalizeCaseProp2['default'])(field['case']), (0, _normalizeMask2['default'])(field.mask)))

		// {field.actions[1].action === 'find' ? $search : null}

		// </span>

	);
};