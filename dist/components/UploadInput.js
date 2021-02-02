Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

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

  var _useState = (0, _react.useState)(''),
      _useState2 = _slicedToArray(_useState, 2),
      pathValue = _useState2[0],
      setPathValue = _useState2[1];

  var _useState3 = (0, _react.useState)('awaiting-file'),
      _useState4 = _slicedToArray(_useState3, 2),
      uploadStatus = _useState4[0],
      setUploadStatus = _useState4[1];

  var _useState5 = (0, _react.useState)(0),
      _useState6 = _slicedToArray(_useState5, 2),
      uploadPercent = _useState6[0],
      setUploadPercent = _useState6[1];

  var _useState7 = (0, _react.useState)(''),
      _useState8 = _slicedToArray(_useState7, 2),
      URLStorage = _useState8[0],
      setURLStorage = _useState8[1];

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

      (0, _upload2['default'])(data.evento.hash, currentInput.files, apiUpload.upload, setPathValue, setUploadPercent, setUploadStatus);

      /**
       * -----
       *
       */

      setURLStorage(data.evento.URL_storage);
    })['catch'](function (error) {

      /**
       * -----
       *
       */

      console.log(error);
    });
  };

  /**
   * -----
   *
   */

  var handleUploadInput = function handleUploadInput(e) {

    e.target.value ? setUploadStatus('pre-upload') : setUploadStatus('awaiting-file');
  };

  /**
   * -----
   *
   */

  var backToCompleteUploadState = function backToCompleteUploadState() {

    setUploadStatus('complete');
    cleanVisualUploadInput();
  };

  /**
   * -----
   *
   */

  var cleanUploadInput = function cleanUploadInput() {}
  // Delete file callback


  /**
   * -----
   *
   */

  ;var cleanVisualUploadInput = function cleanVisualUploadInput() {

    var currentInput = uploadInput.current;
    currentInput.value = '';
  };

  /**
   * -----
   *
   */

  return _react2['default'].createElement(
    'div',
    null,
    _react2['default'].createElement(
      'label',
      null,
      ' ',
      field.label,
      ' '
    ),
    _react2['default'].createElement(
      'div',
      null,
      _react2['default'].createElement('input', _extends((_extends2 = {
        className: 'valleForm__upload-input',
        type: 'file'
      }, _defineProperty(_extends2, 'type', field.type), _defineProperty(_extends2, 'placeholder', field.placeholder), _defineProperty(_extends2, 'ref', uploadInput), _defineProperty(_extends2, 'onChange', handleUploadInput), _extends2), (0, _normalizeProp2['default'])('multiple', field.upload.multiple), {
        disabled: uploadStatus === 'progress' || uploadStatus === 'start'
      })),
      uploadStatus !== 'complete' ? _react2['default'].createElement(
        'button',
        {
          onClick: startUpload,
          disabled: uploadStatus === 'awaiting-file' || uploadStatus === 'progress' || uploadStatus === 'start'
        },
        uploadStatus === 'pre-upload' && uploadPercent === 100 ? 'atualizar arquivo' : 'upload'
      ) : null,
      uploadStatus === 'pre-upload' && uploadPercent === 100 ? _react2['default'].createElement(
        'button',
        { onClick: backToCompleteUploadState },
        'calcelar'
      ) : null
    ),
    _react2['default'].createElement(
      'div',
      null,
      'Caminho:',
      _react2['default'].createElement('input', {
        className: 'valleForm__upload-input',
        value: pathValue,
        'data-valle-field': field.id,
        id: field.id,
        'data-tabidentifier': tabIdentifier
      })
    ),
    uploadStatus !== 'awaiting-file' ? _react2['default'].createElement(
      'div',
      null,
      'Progresso: ',
      String(uploadPercent) + '%',
      uploadStatus === 'progress' ? _react2['default'].createElement(
        'button',
        null,
        'cancelar'
      ) : null
    ) : null,
    pathValue ? pathValue : null,
    uploadStatus === 'complete' ? _react2['default'].createElement(
      'button',
      null,
      'excluir'
    ) : null,
    uploadStatus === 'complete' ? _react2['default'].createElement(
      'a',
      { href: '' + String(URLStorage) + String(pathValue) },
      'Download'
    ) : null,
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