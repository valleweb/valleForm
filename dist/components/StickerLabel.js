Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

/**
 * TODO: Add JSDocs
 *
 */

var StickerLabel = function StickerLabel(_ref) {
  var readOnly = _ref.readOnly,
      editable = _ref.editable,
      _ref$search = _ref.search,
      search = _ref$search === undefined ? false : _ref$search;


  var state = void 0,
      text = void 0;

  if (search) {
    state = 'search';
    text = 'Pesquisar';
  } else if (!readOnly && !editable) {
    state = 'add';
    text = 'Inserir';
  } else if (readOnly && !editable) {
    state = 'view';
    text = 'Visualizar';
  } else if (!readOnly && editable) {
    state = 'edit';
    text = 'Editar';
  }

  return _react2['default'].createElement(
    'div',
    { className: 'valleForm__mode-label-wrapper' },
    _react2['default'].createElement(
      'div',
      { className: 'valleForm__mode-label valleForm__mode-label--' + String(state) },
      text
    )
  );
};

exports['default'] = StickerLabel;