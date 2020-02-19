Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var Textarea = function Textarea(_ref) {
  var field = _ref.field,
      _ref$readOnly = _ref.readOnly,
      readOnly = _ref$readOnly === undefined ? false : _ref$readOnly,
      _ref$error = _ref.error,
      error = _ref$error === undefined ? false : _ref$error;

  var _useState = (0, _react.useState)(error),
      _useState2 = _slicedToArray(_useState, 2),
      err = _useState2[0],
      setErr = _useState2[1];

  // --------------
  // Global required validation
  // -------------

  var textAreaRef = _react2['default'].createRef();

  (0, _react.useEffect)(function () {

    var textArea = textAreaRef.current;
    textArea.dataset.valleError === 'true' ? setErr(true) : setErr(false);
  });

  // --------------
  // Custom UI
  // -------------

  var errorStyle = err ? 'valleForm__textarea--error' : '';
  var disabledStyle = readOnly ? 'valleForm__textarea--disabled' : '';

  var $description = !err ? _react2['default'].createElement(
    'small',
    { id: 'description', className: 'valleForm__textarea__description' },
    field.helper_text
  ) : _react2['default'].createElement(
    'span',
    { role: 'alert', id: 'description', className: 'valleForm__textarea__description' },
    field.error_text
  );

  // --------------
  // Individual validation
  // -------------

  var validate = function validate() {

    if (field.required) {
      var textArea = textAreaRef.current;
      return textArea.value ? setErr(false) : setErr(true);
    }
  };

  return _react2['default'].createElement(
    'span',
    { className: 'valleForm__textarea ' + disabledStyle + ' ' + errorStyle, key: field.id },
    _react2['default'].createElement(
      'textarea',
      {
        className: 'valleForm__textarea__input',
        placeholder: field.placeholder,
        'data-valle-field': field.id,
        id: field.id,
        disabled: readOnly,
        onBlur: validate,
        ref: textAreaRef,
        'data-valle-error': err,
        'data-valle-required': field.required
      },
      field.value ? field.value : null
    ),
    _react2['default'].createElement(
      'label',
      { id: 'inputLabel', className: 'valleForm__textarea__label' },
      field.label,
      field.required ? ' *' : null
    ),
    $description
  );
};

exports['default'] = Textarea;