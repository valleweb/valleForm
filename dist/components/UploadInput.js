Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _getHash = require('../rest/getHash');

var _getHash2 = _interopRequireDefault(_getHash);

var _upload = require('../rest/upload');

var _upload2 = _interopRequireDefault(_upload);

var _normalizeProp = require('../helpers/normalizeProp');

var _normalizeProp2 = _interopRequireDefault(_normalizeProp);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * TODO: Add JSDocs
 *
 */

var UploadInput = function UploadInput(_ref) {
  var _extends2;

  var field = _ref.field,
      readOnly = _ref.readOnly,
      editable = _ref.editable,
      token = _ref.token,
      _id = _ref._id,
      baseApi = _ref.baseApi,
      params = _ref.params,
      setSnackBarStatus = _ref.setSnackBarStatus,
      $loading = _ref.$loading,
      tabErrorCountControls = _ref.tabErrorCountControls,
      tabIdentifier = _ref.tabIdentifier,
      apiUpload = _ref.apiUpload;


  /**
   * -----
   *
   */

  var uploadInput = _react2['default'].createRef();

  /**
   * -----
   *
   */

  var startUpload = function startUpload() {

    /**
     * -----
     *
     */

    var currentInput = uploadInput.current;

    /**
     * -----
     *
     */

    (0, _getHash2['default'])(token, params, field.id, apiUpload.request).then(function (data) {

      /**
       * -----
       *
       */

      (0, _upload2['default'])(data.evento.hash, currentInput.files, apiUpload.upload).then(function (data) {
        console.log(data);
      })['catch'](function (error) {
        console.log(error);
      });
    })['catch'](function (error) {
      console.log(error);
    });
  };

  return _react2['default'].createElement(
    'div',
    null,
    _react2['default'].createElement(
      'div',
      null,
      _react2['default'].createElement(
        'label',
        null,
        ' ',
        field.label,
        ' '
      ),
      _react2['default'].createElement('input', _extends((_extends2 = {
        'class': 'valleForm__upload-input',
        type: 'file',
        value: field.value ? field.value : null
      }, _defineProperty(_extends2, 'type', field.type), _defineProperty(_extends2, 'placeholder', field.placeholder), _defineProperty(_extends2, 'data-valle-field', field.id), _defineProperty(_extends2, 'ref', uploadInput), _defineProperty(_extends2, 'id', field.id), _defineProperty(_extends2, 'data-tabidentifier', tabIdentifier), _extends2), (0, _normalizeProp2['default'])('multiple', field.upload.multiple))),
      _react2['default'].createElement(
        'button',
        { onClick: startUpload },
        'upload'
      )
    ),
    _react2['default'].createElement(
      'div',
      null,
      _react2['default'].createElement(
        'span',
        null,
        ' progressbar '
      ),
      _react2['default'].createElement(
        'button',
        null,
        ' cancel '
      )
    ),
    _react2['default'].createElement(
      'span',
      null,
      ' ',
      field.helper_text,
      ' '
    ),
    _react2['default'].createElement(
      'span',
      null,
      ' ',
      field.error_text,
      ' '
    )
  );
};

exports['default'] = UploadInput;