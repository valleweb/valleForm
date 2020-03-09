Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _makeJsxRows = require('./makeElements/makeJsxRows');

var _makeJsxRows2 = _interopRequireDefault(_makeJsxRows);

var _makeSpeedDialActions = require('./makeElements/makeWebcomponents/makeSpeedDialActions');

var _makeSpeedDialActions2 = _interopRequireDefault(_makeSpeedDialActions);

var _Snackbar = require('./components/Snackbar');

var _Snackbar2 = _interopRequireDefault(_Snackbar);

var _Switch = require('./components/Switch');

var _Switch2 = _interopRequireDefault(_Switch);

var _addFieldsValues = require('./fieldsControl/addFieldsValues');

var _addFieldsValues2 = _interopRequireDefault(_addFieldsValues);

var _cleanFields = require('./fieldsControl/cleanFields');

var _cleanFields2 = _interopRequireDefault(_cleanFields);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

/**
 * TODO: Add JSDocs
 * 
 */

var ValleForm = function ValleForm(_ref) {
  var _ref$rows = _ref.rows,
      rows = _ref$rows === undefined ? [] : _ref$rows,
      _id = _ref._id,
      _ref$values = _ref.values,
      values = _ref$values === undefined ? null : _ref$values,
      _ref$readOnly = _ref.readOnly,
      readOnly = _ref$readOnly === undefined ? false : _ref$readOnly,
      baseApi = _ref.baseApi,
      canonicalApi = _ref.canonicalApi,
      params = _ref.params,
      _ref$$loading = _ref.$loading,
      $loading = _ref$$loading === undefined ? 'loading' : _ref$$loading,
      _ref$buttons = _ref.buttons,
      buttons = _ref$buttons === undefined ? [] : _ref$buttons,
      _ref$token = _ref.token,
      token = _ref$token === undefined ? '' : _ref$token;

  var _useState = (0, _react.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      dynamicReadOnly = _useState2[0],
      setDynamicReadOnly = _useState2[1];

  var _useState3 = (0, _react.useState)(false),
      _useState4 = _slicedToArray(_useState3, 2),
      editable = _useState4[0],
      setEditable = _useState4[1]; // For makeSpeedDialActionsl use


  var _useState5 = (0, _react.useState)(false),
      _useState6 = _slicedToArray(_useState5, 2),
      filterByVisibleScreen = _useState6[0],
      setFilterByVisibleScreen = _useState6[1];

  var _useState7 = (0, _react.useState)({
    open: false,
    text: '',
    type: ''
  }),
      _useState8 = _slicedToArray(_useState7, 2),
      feedback = _useState8[0],
      setFeedback = _useState8[1];

  /**
   * Control vizualization only and editable state
   * 
   */

  (0, _react.useEffect)(function () {
    return setDynamicReadOnly(readOnly);
  }, [readOnly]);

  /**
   * Control dynamic values
   * 
   */

  (0, _react.useEffect)(function () {
    if (values) cancelFieldsEditable();
  }, [values]);

  /**
   * Control fields visibility
   * 
   */

  var changeVisibleScreen = function changeVisibleScreen() {
    filterByVisibleScreen ? setFilterByVisibleScreen(false) : setFilterByVisibleScreen(true);
  };

  /**
   * Control speed dial state
   * 
   */

  var valleSpeedDialRef = _react2['default'].createRef();

  var closeValleSpeedDial = function closeValleSpeedDial() {
    var valleSpeedDial = valleSpeedDialRef.current;
    valleSpeedDial.open = false;
  };

  /**
   * Control fields states
   * 
   */

  var makeFieldsEditable = function makeFieldsEditable() {
    setDynamicReadOnly(false);
    setEditable(true);
    closeValleSpeedDial();
  };

  var removeFieldsEditable = function removeFieldsEditable() {
    setDynamicReadOnly(true);
    setEditable(false);
    //closeValleSpeedDial();
  };

  var cancelFieldsEditable = function cancelFieldsEditable() {
    (0, _cleanFields2['default'])();
    (0, _addFieldsValues2['default'])(values);
    setDynamicReadOnly(true);
    setEditable(false);
    closeValleSpeedDial();
  };

  var makeFieldsDefault = function makeFieldsDefault() {
    (0, _cleanFields2['default'])();
    setDynamicReadOnly(false);
    setEditable(false);
    //closeValleSpeedDial();
  };

  /**
   * Control feedbacks status
   * 
   */

  var showFeedback = function showFeedback(text, type) {

    setFeedback({ open: false }); // Clear old feedback

    setTimeout(function () {
      setFeedback({
        open: true,
        text: text,
        type: type
      });
    }, 100); // Trick for second state change
  };

  /**
   * Make rows
   * 
   */

  var $rows = (0, _makeJsxRows2['default'])(rows, filterByVisibleScreen, dynamicReadOnly);

  /**
   * UI feedbacks
   * 
   */

  var $feedback = feedback.open ? _react2['default'].createElement(_Snackbar2['default'], { report: feedback.text, type: feedback.type }) : null;

  /**
   * Render ValleForm
   * 
   */

  var rowsDataDone = rows.length > 0;

  if (rowsDataDone) {

    return _react2['default'].createElement(
      'div',
      { className: 'valleForm' },
      _react2['default'].createElement(_Switch2['default'], {
        label: 'Limitar campos',
        readOnly: dynamicReadOnly,
        onChange: changeVisibleScreen
      }),
      $rows,
      _react2['default'].createElement(
        'span',
        { className: 'valleForm__sub' },
        '* Campos obrigat\xF3rios'
      ),
      _react2['default'].createElement(
        'valle-speed-dial',
        { id: 'valleSpeedDial', 'class': 'valleForm__speedDial', ref: valleSpeedDialRef },
        (0, _makeSpeedDialActions2['default'])({
          buttons: buttons,
          readOnly: dynamicReadOnly,
          editable: editable,
          baseApi: baseApi,
          canonicalApi: canonicalApi,
          params: params,
          _id: _id,
          feedbackCb: showFeedback,
          editCb: makeFieldsEditable,
          formCb: removeFieldsEditable,
          cancelCb: cancelFieldsEditable,
          newCB: makeFieldsDefault,
          token: token
        })
      ),
      $feedback
    );
  } else {

    return $loading;
  }
};

exports['default'] = ValleForm;