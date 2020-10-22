Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Textarea = require('./Textarea');

var _Textarea2 = _interopRequireDefault(_Textarea);

var _reactMarkdown = require('react-markdown');

var _reactMarkdown2 = _interopRequireDefault(_reactMarkdown);

var _remarkGfm = require('remark-gfm');

var _remarkGfm2 = _interopRequireDefault(_remarkGfm);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

/**
 * TODO: Add JSDocs
 * 
 */

var MarkdownEditor = function MarkdownEditor(_ref) {
  var field = _ref.field,
      _ref$readOnly = _ref.readOnly,
      readOnly = _ref$readOnly === undefined ? false : _ref$readOnly,
      editable = _ref.editable,
      tabErrorCountControls = _ref.tabErrorCountControls,
      tabIdentifier = _ref.tabIdentifier;

  var _useState = (0, _react.useState)(field.value),
      _useState2 = _slicedToArray(_useState, 2),
      markdownText = _useState2[0],
      setMarkdownText = _useState2[1];

  var _useState3 = (0, _react.useState)(true),
      _useState4 = _slicedToArray(_useState3, 2),
      editorShow = _useState4[0],
      setEditorShow = _useState4[1];

  var _useState5 = (0, _react.useState)(true),
      _useState6 = _slicedToArray(_useState5, 2),
      previewShow = _useState6[0],
      setPreviewShow = _useState6[1];

  var _useState7 = (0, _react.useState)(false),
      _useState8 = _slicedToArray(_useState7, 2),
      big = _useState8[0],
      setBig = _useState8[1];

  var _useState9 = (0, _react.useState)(0),
      _useState10 = _slicedToArray(_useState9, 2),
      currentScroll = _useState10[0],
      setCurrentScroll = _useState10[1];

  /**
   * -----
   * 
   */

  var showEditor = function showEditor() {
    setEditorShow(true);
    setPreviewShow(false);
  };

  var showPreview = function showPreview() {
    setPreviewShow(true);
    setEditorShow(false);
  };

  var showSplit = function showSplit() {
    setPreviewShow(true);
    setEditorShow(true);
  };

  var toggleBig = function toggleBig() {
    setBig(!big);
  };

  /**
   * -----
   * 
   */

  (0, _react.useEffect)(function () {
    markdownText ? field.value = markdownText : field.value = null;
  }, [editorShow]);

  /**
   * -----
   * 
   */

  var render = _react2['default'].createRef();

  (0, _react.useEffect)(function () {

    if (render.current) {
      render.current.scroll(0, currentScroll);
    }
  }, [currentScroll]);

  return _react2['default'].createElement(
    'div',
    { className: 'valleForm__MarkdownEditor ' + (big ? 'valleForm__MarkdownEditor--big' : '') },
    _react2['default'].createElement(
      'div',
      { className: 'valleForm__MarkdownEditor__headers' },
      _react2['default'].createElement(
        'div',
        { className: 'valleForm__MarkdownEditor__slider' },
        _react2['default'].createElement(
          'button',
          {
            onClick: showEditor,
            disabled: !previewShow,
            className: 'valleForm__MarkdownEditor__button valleForm__MarkdownEditor__button--slider',
            'aria-label': 'Apenas editor',
            'data-balloon-pos': 'up-right'
          },
          _react2['default'].createElement(
            'svg',
            {
              className: 'valleForm__MarkdownEditor__icon',
              xmlns: 'http://www.w3.org/2000/svg',
              width: '24',
              height: '24',
              viewBox: '0 0 24 24'
            },
            _react2['default'].createElement('path', { d: 'M7.127 22.564l-7.126 1.436 1.438-7.125 5.688 5.689zm-4.274-7.104l5.688 5.689 15.46-15.46-5.689-5.689-15.459 15.46z' })
          )
        ),
        _react2['default'].createElement(
          'button',
          {
            onClick: showPreview,
            disabled: !editorShow,
            className: 'valleForm__MarkdownEditor__button valleForm__MarkdownEditor__button--slider',
            'aria-label': 'Apenas pr\xE9via',
            'data-balloon-pos': 'up-right'
          },
          _react2['default'].createElement(
            'svg',
            {
              className: 'valleForm__MarkdownEditor__icon',
              xmlns: 'http://www.w3.org/2000/svg',
              width: '24',
              height: '24',
              viewBox: '0 0 24 24'
            },
            _react2['default'].createElement('path', { d: 'M22 13v-13h-20v24h8.409c4.857 0 3.335-8 3.335-8 3.009.745 8.256.419 8.256-3zm-4-7h-12v-1h12v1zm0 3h-12v-1h12v1zm0 3h-12v-1h12v1zm-2.091 6.223c2.047.478 4.805-.279 6.091-1.179-1.494 1.998-5.23 5.708-7.432 6.881 1.156-1.168 1.563-4.234 1.341-5.702z' })
          )
        ),
        _react2['default'].createElement(
          'button',
          {
            onClick: showSplit,
            disabled: previewShow && editorShow,
            className: 'valleForm__MarkdownEditor__button valleForm__MarkdownEditor__button--slider',
            'aria-label': 'Editor e pr\xE9via',
            'data-balloon-pos': 'up-right'
          },
          _react2['default'].createElement(
            'svg',
            {
              className: 'valleForm__MarkdownEditor__icon',
              xmlns: 'http://www.w3.org/2000/svg',
              width: '24',
              height: '24',
              viewBox: '0 0 24 24'
            },
            _react2['default'].createElement('path', { d: 'M18 6v-6h-18v18h6v6h18v-18h-6zm-16 10v-14h14v4h-10v10h-4z' })
          )
        )
      ),
      _react2['default'].createElement(
        'button',
        {
          onClick: toggleBig,
          className: 'valleForm__MarkdownEditor__button valleForm__MarkdownEditor__button--toggle',
          'aria-label': (big ? 'Diminuir' : 'Aumentar') + ' \xE1rea de texto',
          'data-balloon-pos': 'down-right'
        },
        _react2['default'].createElement(
          'svg',
          {
            className: 'valleForm__MarkdownEditor__icon',
            xmlns: 'http://www.w3.org/2000/svg',
            width: '24',
            height: '24',
            viewBox: '0 0 24 24'
          },
          _react2['default'].createElement('path', { d: 'M24 0v10.999l-3.379-3.378-4.379 4.379-4.242-4.242 4.379-4.379-3.379-3.379h11zm-11.875 16.138l-4.242-4.242-4.504 4.483-3.379-3.378v10.999h11l-3.379-3.379 4.504-4.483z' })
        )
      )
    ),
    _react2['default'].createElement(
      'div',
      { className: 'valleForm__MarkdownEditor__body' },
      editorShow ? _react2['default'].createElement(
        'div',
        { className: 'valleForm__MarkdownEditor__editor ' + (!previewShow ? 'valleForm__MarkdownEditor__editor--full' : '') },
        _react2['default'].createElement(_Textarea2['default'], {
          field: field,
          readOnly: readOnly,
          editable: editable,
          tabErrorCountControls: tabErrorCountControls,
          tabIdentifier: tabIdentifier,
          onChange: function () {
            function onChange(e) {
              return setMarkdownText(e.target.value);
            }

            return onChange;
          }(),
          onScroll: function () {
            function onScroll(e) {
              return setCurrentScroll(e.target.scrollTop);
            }

            return onScroll;
          }()
        })
      ) : null,
      previewShow ? _react2['default'].createElement(
        'div',
        { className: 'valleForm__MarkdownEditor__preview ' + (!editorShow ? 'valleForm__MarkdownEditor__preview--full' : '') },
        _react2['default'].createElement(
          'div',
          { className: 'valleForm__MarkdownEditor__label' },
          field.label,
          ' (Pr\xE9via)'
        ),
        _react2['default'].createElement(
          'div',
          { className: 'valleForm__MarkdownEditor__render', ref: render },
          _react2['default'].createElement(
            _reactMarkdown2['default'],
            { plugins: [_remarkGfm2['default']], className: 'markdown-render' },
            markdownText
          )
        )
      ) : null
    ),
    !editorShow && previewShow ? _react2['default'].createElement('input', {
      value: markdownText,
      id: field.id,
      className: 'visual-hidden'
    }) : null
  );
};

exports['default'] = MarkdownEditor;