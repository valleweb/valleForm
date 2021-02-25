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
 * TODO: Allow external svg icons.
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

      (0, _upload2['default'])(data.evento.hash, currentInput.files, apiUpload.upload, setPathValue, setUploadPercent, setUploadStatus, setSnackBarStatus);

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

    setUploadPercent(0);
  };

  /**
   * -----
   *
   */

  var backToCompleteUploadState = function backToCompleteUploadState() {

    setUploadStatus('complete');
    setUploadPercent(100);
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

  var disableUploadButtons = uploadStatus === 'awaiting-file' || uploadStatus === 'progress' || uploadStatus === 'start';

  // console.log('UPLOAD ================')
  // console.log('Readonly: ' + readOnly)
  // console.log('editable: ' + editable)
  // console.log('baseApi: ' + baseApi)
  // console.log('_id: ' + _id)
  // console.log(field)
  // console.log('Caminho: ' + '')
  // console.log('pathValue: ' + pathValue)
  // console.log('================')

  return _react2['default'].createElement(
    'div',
    { className: 'valleForm__upload' },
    _react2['default'].createElement(
      'div',
      { className: 'valleForm__upload__select-file' },
      _react2['default'].createElement('input', _extends((_extends2 = {
        className: 'valleForm__upload__input',
        type: 'file'
      }, _defineProperty(_extends2, 'type', field.type), _defineProperty(_extends2, 'placeholder', field.placeholder), _defineProperty(_extends2, 'ref', uploadInput), _defineProperty(_extends2, 'onChange', handleUploadInput), _extends2), (0, _normalizeProp2['default'])('multiple', field.upload.multiple), {
        disabled: uploadStatus === 'progress' || uploadStatus === 'start'
      })),
      _react2['default'].createElement(
        'label',
        { className: 'valleForm__upload__label' },
        field.label
      ),
      _react2['default'].createElement('input', {
        className: 'visual-hidden',
        value: pathValue,
        'data-valle-field': field.id,
        id: field.id,
        'data-tabidentifier': tabIdentifier
      }),
      uploadStatus !== 'complete' ? pathValue ? // Selected file for the second time

      /**
       * Update file.
       * Available on the update file state.
       *
       */

      _react2['default'].createElement(
        'span',
        null,
        _react2['default'].createElement(
          'button',
          {
            onClick: startUpload,
            disabled: disableUploadButtons,
            className: 'valleForm__upload__button valleForm__upload__button--edit'
          },
          _react2['default'].createElement(
            'svg',
            {
              xmlns: 'http://www.w3.org/2000/svg',
              width: '24',
              height: '24',
              viewBox: '0 0 24 24'
            },
            _react2['default'].createElement('path', { d: 'M8 10h-5l9-10 9 10h-5v10h-8v-10zm11 9v3h-14v-3h-2v5h18v-5h-2z' })
          ),
          'Atualizar'
        ),
        _react2['default'].createElement(
          'button',
          {
            onClick: backToCompleteUploadState,
            disabled: disableUploadButtons,
            className: 'valleForm__upload__button valleForm__upload__button--cancel'
          },
          _react2['default'].createElement(
            'svg',
            {
              xmlns: 'http://www.w3.org/2000/svg',
              width: '24',
              height: '24',
              viewBox: '0 0 24 24',
              className: 'valleForm__upload__button__icon'
            },
            _react2['default'].createElement('path', { d: 'M23 20.168l-8.185-8.187 8.185-8.174-2.832-2.807-8.182 8.179-8.176-8.179-2.81 2.81 8.186 8.196-8.186 8.184 2.81 2.81 8.203-8.192 8.18 8.192z' })
          ),
          'Cancelar'
        )
      ) :

      /**
       * Upload file.
       * Available on the first upload file state.
       *
       */

      _react2['default'].createElement(
        'button',
        {
          onClick: startUpload,
          disabled: disableUploadButtons,
          className: 'valleForm__upload__button valleForm__upload__button--add'
        },
        _react2['default'].createElement(
          'svg',
          {
            xmlns: 'http://www.w3.org/2000/svg',
            width: '24',
            height: '24',
            viewBox: '0 0 24 24'
          },
          _react2['default'].createElement('path', { d: 'M8 10h-5l9-10 9 10h-5v10h-8v-10zm11 9v3h-14v-3h-2v5h18v-5h-2z' })
        ),
        'Upload'
      ) : null
    ),
    uploadStatus !== 'awaiting-file' ? _react2['default'].createElement(
      'div',
      { className: 'valleForm__upload__progress' },
      uploadStatus === 'error' ?

      /**
       * Progress bar error.
       *
       */

      _react2['default'].createElement(
        'div',
        { className: 'valleForm__upload__progress__bar valleForm__upload__progress__error' },
        _react2['default'].createElement(
          'span',
          { className: 'valleForm__upload__progress__percent' },
          'Falha no upload'
        )
      ) :

      /**
       * Progress bar percent animation.
       *
       */

      _react2['default'].createElement(
        'div',
        {
          className: 'valleForm__upload__progress__bar',
          style: { '--progress': String(uploadPercent) + '%' }
        },
        _react2['default'].createElement(
          'span',
          { className: 'valleForm__upload__progress__percent' },
          String(uploadPercent) + '%'
        )
      ),
      uploadStatus === 'progress' ? _react2['default'].createElement(
        'button',
        { className: 'valleForm__upload__button valleForm__upload__button--cancel' },
        'Cancelar'
      ) : null
    ) : null,
    _react2['default'].createElement(
      'div',
      { className: 'valleForm__upload__file-infos' },
      _react2['default'].createElement(
        'div',
        { className: 'valleForm__upload__file-name' },
        pathValue ? 'Arquivo(s) no servidor: ' + pathValue.split('/')[pathValue.split('/').length - 1] : 'Ainda não há arquivo(s) no servidor'
      ),
      uploadStatus === 'complete' ? _react2['default'].createElement(
        'button',
        { className: 'valleForm__upload__button valleForm__upload__button--cancel' },
        _react2['default'].createElement(
          'svg',
          {
            xmlns: 'http://www.w3.org/2000/svg',
            width: '24',
            height: '24',
            viewBox: '0 0 24 24'
          },
          _react2['default'].createElement('path', { fill: 'none', d: 'M0 0h24v24H0V0z' }),
          _react2['default'].createElement('path', { d: 'M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zm2.46-7.12l1.41-1.41L12 12.59l2.12-2.12 1.41 1.41L13.41 14l2.12 2.12-1.41 1.41L12 15.41l-2.12 2.12-1.41-1.41L10.59 14l-2.13-2.12zM15.5 4l-1-1h-5l-1 1H5v2h14V4z', fill: '#fff' }),
          _react2['default'].createElement('path', { fill: 'none', d: 'M0 0h24v24H0z' })
        ),
        'Excluir'
      ) : null,
      uploadStatus === 'complete' ? _react2['default'].createElement(
        'a',
        {
          href: '' + String(URLStorage) + String(pathValue),
          className: 'valleForm__upload__button'
        },
        _react2['default'].createElement(
          'svg',
          {
            xmlns: 'http://www.w3.org/2000/svg',
            width: '24',
            height: '24',
            viewBox: '0 0 24 24'
          },
          _react2['default'].createElement('path', { d: 'M12 21l-8-9h6v-12h4v12h6l-8 9zm9-1v2h-18v-2h-2v4h22v-4h-2z' })
        ),
        'Baixar'
      ) : null
    ),
    _react2['default'].createElement(
      'span',
      { className: 'valleForm__upload__helper-text' },
      field.helper_text
    ),
    _react2['default'].createElement(
      'span',
      { className: 'valleForm__upload__error-text' },
      field.error_text
    )
  );
};

exports['default'] = UploadInput;