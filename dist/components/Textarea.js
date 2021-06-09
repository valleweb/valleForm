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
      error = _ref$error === undefined ? false : _ref$error,
      editable = _ref.editable,
      tabErrorCountControls = _ref.tabErrorCountControls,
      tabIdentifier = _ref.tabIdentifier,
      onChange = _ref.onChange,
      onScroll = _ref.onScroll;

  var _useState = (0, _react.useState)(error),
      _useState2 = _slicedToArray(_useState, 2),
      err = _useState2[0],
      setErr = _useState2[1];

  // --------------
  // Control readOnly sate in editable mode
  // -------------

  var isDisabled = void 0;

  if (editable) {
    isDisabled = readOnly ? true : field.is_PK;
  } else {
    isDisabled = readOnly;
  }

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
  var disabledStyle = isDisabled ? 'valleForm__textarea--disabled' : '';

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

      if (textArea.value) {
        tabErrorCountControls.remove(tabIdentifier, field.id);
        setErr(false);
      } else {
        tabErrorCountControls.add(tabIdentifier, field.id);
        setErr(true);
      }
    }
  };

  return _react2['default'].createElement(
    'span',
    { className: 'valleForm__textarea ' + disabledStyle + ' ' + errorStyle, key: field.id },
    field.description ? _react2['default'].createElement(
      'span',
      {
        className: 'tooltip',
        role: 'tooltip',
        'aria-label': field.description,
        'data-balloon-pos': 'up-right',
        'data-balloon-length': 'large'
      },
      _react2['default'].createElement(
        'svg',
        { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: '18px', height: '18px' },
        _react2['default'].createElement('path', { d: 'M0 0h24v24H0z', fill: 'none' }),
        _react2['default'].createElement('path', { d: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z' })
      ),
      _react2['default'].createElement(
        'small',
        { className: 'visual-hidden' },
        field.description
      )
    ) : null,
    _react2['default'].createElement(
      'textarea',
      {
        className: 'valleForm__textarea__input',
        placeholder: field.placeholder,
        'data-valle-field': '' + String(field.id),
        id: '' + String(field.id),
        disabled: isDisabled,
        onBlur: validate,
        ref: textAreaRef,
        'data-valle-error': err,
        'data-valle-required': field.required,
        'data-tabidentifier': tabIdentifier,
        onChange: onChange,
        onScroll: onScroll,
        'data-has-default-value': field.value ? true : null
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