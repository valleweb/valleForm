Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

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

var _SearchButton = require('../../components/SearchButton');

var _SearchButton2 = _interopRequireDefault(_SearchButton);

var _apiValidations = require('../../rest/apiValidations');

var _apiValidations2 = _interopRequireDefault(_apiValidations);

var _Modal = require('../../components/Modal');

var _Modal2 = _interopRequireDefault(_Modal);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

exports['default'] = function (_ref) {
  var field = _ref.field,
      _ref$readOnly = _ref.readOnly,
      readOnly = _ref$readOnly === undefined ? false : _ref$readOnly,
      editable = _ref.editable,
      token = _ref.token,
      _id = _ref._id,
      baseApi = _ref.baseApi,
      params = _ref.params,
      setSnackBarStatus = _ref.setSnackBarStatus,
      ValleList = _ref.ValleList,
      $loading = _ref.$loading,
      tabErrorCountControls = _ref.tabErrorCountControls,
      tabIdentifier = _ref.tabIdentifier;

  /**
   * -----
   * 
   */

  var _useState = (0, _react.useState)(null),
      _useState2 = _slicedToArray(_useState, 2),
      modalData = _useState2[0],
      setModalData = _useState2[1];

  var _useState3 = (0, _react.useState)(null),
      _useState4 = _slicedToArray(_useState3, 2),
      currentFilledFields = _useState4[0],
      setCurrentFilledFields = _useState4[1];

  /**
   * -----
   * 
   */

  var validadeField = function validadeField(field, action) {
    (0, _apiValidations2['default'])(baseApi, token, params, field, action, _id, setModalData, setSnackBarStatus, currentFilledFields);
  };

  /**
   * Verify editable mode
   * 
   */

  var isDisabled = void 0;

  if (editable) {
    isDisabled = readOnly ? true : field.is_PK || field.readonly;
  } else {
    isDisabled = readOnly ? true : field.readonly;
  }

  /**
   * -----
   * 
   */

  var customDescriptionStyle = field.label == 'Descrição' ? 'valleForm__input--description' : '';

  /**
   * Find current action
   * 
   */

  var is_exists_blur = void 0;
  var is_exact_blur = void 0;
  var is_find = void 0;

  if (Array.isArray(field.actions)) {

    field.actions.forEach(function (current) {
      currentAction = current.action;
      if (current.action === 'exists_blur') is_exists_blur = true;
      if (current.action === 'exact_blur') is_exact_blur = true;
      if (current.action === 'find') is_find = true;
    });
  }

  /**
   * -----
   * 
   */

  return _react2['default'].createElement(
    'span',
    {
      className: 'valleForm__input__container',
      key: String(_id) + '_' + String(field.id)
    },
    _react2['default'].createElement('valle-input', _extends({
      value: field.value ? field.value : null,
      'class': 'valleForm__input ' + customDescriptionStyle,
      type: field.type,
      label: field.label,
      placeholder: field.placeholder,
      helpertext: field.helper_text,
      errortext: field.error_text,
      'data-valle-field': '' + String(field.id),
      maxlength: field.maxlength,
      id: '' + String(field.id),
      'data-tabidentifier': tabIdentifier,
      onBlur: function () {
        function onBlur(e) {

          if (is_exists_blur) validadeField(field, 'exists_blur');
          if (is_exact_blur) validadeField(field, 'exact_blur');

          /**
           * -----
           * 
           */

          var currentElement = e.target; // Save the element reference

          setTimeout(function () {
            // Await the webcomponent blur event

            currentElement.error ? tabErrorCountControls.add(tabIdentifier, field.id) : tabErrorCountControls.remove(tabIdentifier, field.id);
          }, 100);
        }

        return onBlur;
      }(),
      pattern: field.pattern,
      tooltip: field.description,
      tooltippos: 'top-right',
      tooltiplength: 'large'
    }, (0, _normalizeRequired2['default'])(field.required), (0, _normalizeReadOnly2['default'])(isDisabled), (0, _normalizeCaseProp2['default'])(field['case']), (0, _normalizeMask2['default'])(field.mask))),
    is_find ? _react2['default'].createElement(_SearchButton2['default'], {
      isDisabled: isDisabled,
      onClick: function () {
        function onClick() {
          return validadeField(field, 'find');
        }

        return onClick;
      }()
    }) : null,
    modalData ? _react2['default'].createElement(_Modal2['default'], {
      data: modalData,
      setModalData: setModalData,
      baseApi: baseApi,
      params: params,
      token: token,
      setSnackBarStatus: setSnackBarStatus,
      ValleList: ValleList,
      $loading: $loading,
      _id: _id,
      setCurrentFilledFields: setCurrentFilledFields
    }) : null
  );
};