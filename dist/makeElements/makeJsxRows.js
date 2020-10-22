Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _isSelect = require('../helpers/isSelect');

var _isSelect2 = _interopRequireDefault(_isSelect);

var _MakeInputField = require('./makeWebcomponents/MakeInputField');

var _MakeInputField2 = _interopRequireDefault(_MakeInputField);

var _makeSelectField = require('./makeWebcomponents/makeSelectField');

var _makeSelectField2 = _interopRequireDefault(_makeSelectField);

var _Textarea = require('../components/Textarea');

var _Textarea2 = _interopRequireDefault(_Textarea);

var _MarkdownEditor = require('../components/MarkdownEditor');

var _MarkdownEditor2 = _interopRequireDefault(_MarkdownEditor);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

exports['default'] = function (rows) {
  var filterByVisibleScreen = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  var readOnly = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  var editable = arguments[3];
  var token = arguments[4];
  var _id = arguments[5];
  var baseApi = arguments[6];
  var params = arguments[7];
  var setSnackBarStatus = arguments[8];
  var ValleList = arguments[9];
  var $loading = arguments[10];
  var tabErrorCountControls = arguments[11];
  var tabIdentifier = arguments[12];
  var values = arguments[13];
  return rows.map(function (row, index) {

    var $fields = row.filter(function (field) {
      return isVisibleScreen(field, filterByVisibleScreen);
    }).map(function (field) {

      // --------------
      // Resolve react component
      // --------------

      if (field.element === 'textarea') {

        // --------------
        // Custom markdown editor
        // --------------

        if (field.type === 'markdown') {
          return _react2['default'].createElement(_MarkdownEditor2['default'], {
            key: index,
            field: field,
            readOnly: readOnly,
            editable: editable,
            tabErrorCountControls: tabErrorCountControls,
            tabIdentifier: tabIdentifier,
            values: values
          });
        }

        return _react2['default'].createElement(_Textarea2['default'], {
          key: index,
          field: field,
          readOnly: readOnly,
          editable: editable,
          tabErrorCountControls: tabErrorCountControls,
          tabIdentifier: tabIdentifier
        });
      }

      // --------------
      // Resolve form webcomponents
      // --------------

      return (0, _isSelect2['default'])(field.element) ? resolveSelectSize(row, field, readOnly, editable, token, _id, tabErrorCountControls, tabIdentifier) : _react2['default'].createElement(_MakeInputField2['default'], {
        field: field,
        readOnly: readOnly,
        editable: editable,
        token: token,
        _id: _id,
        baseApi: baseApi,
        params: params,
        setSnackBarStatus: setSnackBarStatus,
        ValleList: ValleList,
        $loading: $loading,
        tabErrorCountControls: tabErrorCountControls,
        tabIdentifier: tabIdentifier
      });
    });

    return $fields.length ? _react2['default'].createElement(
      'div',
      {
        className: 'valleForm__row',
        key: index
      },
      $fields
    ) : null;
  });
};

var isVisibleScreen = function isVisibleScreen(field, filterByVisibleScreen) {
  return filterByVisibleScreen ? field.visible_screen : true;
};

var resolveSelectSize = function resolveSelectSize(row, field) {
  var readOnly = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  var editable = arguments[3];
  var token = arguments[4];
  var _id = arguments[5];
  var tabErrorCountControls = arguments[6];
  var tabIdentifier = arguments[7];

  return row.length === 1 ? // Verify if the select is a single field on row.
  (0, _makeSelectField2['default'])(field, 'valleForm__select--big', readOnly, editable, null, _id, tabErrorCountControls, tabIdentifier) : (0, _makeSelectField2['default'])(field, '', readOnly, editable, token, _id, tabErrorCountControls, tabIdentifier);
};