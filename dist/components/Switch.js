Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var Switch = function Switch(_ref) {
  var label = _ref.label,
      _ref$readOnly = _ref.readOnly,
      readOnly = _ref$readOnly === undefined ? false : _ref$readOnly,
      onChange = _ref.onChange,
      _ref$_id = _ref._id,
      _id = _ref$_id === undefined ? 'input-switch' : _ref$_id;

  var switchState = readOnly ? "valleForm__switch--disabled" : "";

  return _react2['default'].createElement(
    'span',
    { className: 'valleForm__switch ' + switchState },
    _react2['default'].createElement(
      'label',
      { className: 'valleForm__switch__label', htmlFor: _id },
      ' ',
      label,
      ' '
    ),
    _react2['default'].createElement('input', {
      id: _id,
      className: 'valleForm__switch__input',
      type: 'checkbox',
      disabled: readOnly,
      onChange: onChange
    }),
    _react2['default'].createElement('label', { className: 'valleForm__switch__toggle', htmlFor: _id })
  );
};

exports['default'] = Switch;