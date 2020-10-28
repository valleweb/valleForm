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

var _Switch = require('./components/Switch');

var _Switch2 = _interopRequireDefault(_Switch);

var _addFieldsValues = require('./fieldsControl/addFieldsValues');

var _addFieldsValues2 = _interopRequireDefault(_addFieldsValues);

var _cleanFields = require('./fieldsControl/cleanFields');

var _cleanFields2 = _interopRequireDefault(_cleanFields);

var _makeIdentifier = require('./tabErrorsControl/makeIdentifier');

var _makeIdentifier2 = _interopRequireDefault(_makeIdentifier);

var _tabErrorCountControls = require('./tabErrorsControl/tabErrorCountControls');

var _tabErrorCountControls2 = _interopRequireDefault(_tabErrorCountControls);

var _showErrorsCount = require('./tabErrorsControl/showErrorsCount');

var _showErrorsCount2 = _interopRequireDefault(_showErrorsCount);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

/**
 * TODO: Add JSDocs
 * 
 */

var ValleForm = function ValleForm(_ref) {
  var _ref$tabs = _ref.tabs,
      tabs = _ref$tabs === undefined ? [] : _ref$tabs,
      _ref$_id = _ref._id,
      _id = _ref$_id === undefined ? 'valleForm' : _ref$_id,
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
      token = _ref$token === undefined ? '' : _ref$token,
      getData = _ref.getData,
      _ref$setSnackBarStatu = _ref.setSnackBarStatus,
      setSnackBarStatus = _ref$setSnackBarStatu === undefined ? null : _ref$setSnackBarStatu,
      _ref$ValleList = _ref.ValleList,
      ValleList = _ref$ValleList === undefined ? null : _ref$ValleList,
      _ref$updateValleList = _ref.updateValleList,
      updateValleList = _ref$updateValleList === undefined ? null : _ref$updateValleList,
      _ref$cleanOldFormValu = _ref.cleanOldFormValues,
      cleanOldFormValues = _ref$cleanOldFormValu === undefined ? null : _ref$cleanOldFormValu;

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

  var _useState7 = (0, _react.useState)(0),
      _useState8 = _slicedToArray(_useState7, 2),
      visibleTab = _useState8[0],
      setVisibleTab = _useState8[1];

  var _useState9 = (0, _react.useState)(null),
      _useState10 = _slicedToArray(_useState9, 2),
      cleanup = _useState10[0],
      setCleanup = _useState10[1];

  /**
   * Control tab error counter
   * 
   */

  var _useState11 = (0, _react.useState)({}),
      _useState12 = _slicedToArray(_useState11, 2),
      tabErrorsCount = _useState12[0],
      setTabErrorsCount = _useState12[1];

  /**
   * Inject the parent states inside the tab error functions
   * 
   */

  var tabErrorCount = (0, _tabErrorCountControls2['default'])(tabErrorsCount, setTabErrorsCount);

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
   * Control speed dial open state
   * 
   */

  var speedDial = _react2['default'].createRef();

  var closeSpeedDial = function closeSpeedDial() {

    console.log('===========================');
    console.log('Speed Dial:');
    console.log(speedDial.current);
    console.log('===========================');

    if (speedDial.current) {
      speedDial.current.open = false;
    }
  };

  /**
   * Control fields states
   * 
   */

  var makeFieldsEditable = function makeFieldsEditable() {
    setDynamicReadOnly(false);
    setEditable(true);
    closeSpeedDial();
  };

  var removeFieldsEditable = function removeFieldsEditable() {
    setDynamicReadOnly(true);
    setEditable(false);
    closeSpeedDial();
  };

  var cancelFieldsEditable = function cancelFieldsEditable() {
    (0, _cleanFields2['default'])(_id);
    (0, _addFieldsValues2['default'])(values, _id);
    setDynamicReadOnly(true);
    setEditable(false);
    closeSpeedDial();
  };

  var makeFieldsDefault = function makeFieldsDefault() {
    (0, _cleanFields2['default'])(_id, setCleanup);
    setDynamicReadOnly(false);
    setEditable(false);
    closeSpeedDial();
    cleanOldFormValues();
  };

  /**
   * Control feedbacks status
   * 
   */

  var showFeedback = function showFeedback(text, type) {

    if (setSnackBarStatus) {
      setSnackBarStatus({
        show: true,
        text: text,
        type: type
      });
    }
  };

  /**
   * Control tabs visibility
   * 
   */

  var showTab = function showTab(index) {
    setVisibleTab(index);
  };

  /**
   * Make Tabs titles
   * 
   */

  var $tabsTitles = tabs.map(function (tab, index) {

    var isSelected = visibleTab === index;
    var selectedTab = isSelected ? 'valleForm__tabs__title--selected' : '';

    /**
     * Get the tab error count
     * 
     */

    var tabIdentifier = (0, _makeIdentifier2['default'])(tab.title, index);
    var errorsCount = (0, _showErrorsCount2['default'])(tabErrorsCount, tabIdentifier);

    return _react2['default'].createElement(
      'button',
      {
        key: index,
        className: 'valleForm__tabs__title ' + selectedTab,
        onClick: function () {
          function onClick() {
            return showTab(index);
          }

          return onClick;
        }()
      },
      tab.title,
      errorsCount ? _react2['default'].createElement(
        'span',
        { className: 'valleForm__tabs__badge' },
        ' ',
        errorsCount,
        ' '
      ) : null
    );
  });

  /**
   * Make Tabs
   * 
   */

  var $tabs = tabs.map(function (tab, index) {

    var tabIdentifier = (0, _makeIdentifier2['default'])(tab.title, index);

    var $rows = [];

    if (tab.groups) {

      if (tab.groups.length > 1) {

        /**
         * Multiple Groups
         * 
         */

        $rows = tab.groups.map(function (group) {

          var $groupRows = (0, _makeJsxRows2['default'])(group.lines, filterByVisibleScreen, dynamicReadOnly, editable, token, _id, baseApi, params, setSnackBarStatus, ValleList, $loading, tabErrorCount, tabIdentifier, values, cleanup);

          return _react2['default'].createElement(
            'div',
            {
              className: 'valleForm__group',
              role: 'group',
              'aria-labelledby': 'shipping_head'
            },
            _react2['default'].createElement(
              'h2',
              {
                className: 'valleForm__group__title',
                id: 'shipping_head'
              },
              group.title
            ),
            $groupRows
          );
        });
      } else {

        /**
         * Single group
         * 
         */

        $rows = (0, _makeJsxRows2['default'])(tab.groups[0].lines, filterByVisibleScreen, dynamicReadOnly, editable, token, _id, baseApi, params, setSnackBarStatus, ValleList, $loading, tabErrorCount, tabIdentifier, values, cleanup);
      }
    } else {

      /**
       * Default rows (Legacy mode)
       * 
       */

      $rows = (0, _makeJsxRows2['default'])(tab.lines, filterByVisibleScreen, dynamicReadOnly, editable, token, _id, baseApi, params, setSnackBarStatus, ValleList, $loading, tabErrorCount, tabIdentifier, values, cleanup);
    }

    var isVisibleTab = visibleTab === index;
    var tabVisibility = isVisibleTab ? 'valleForm__tabs__tab--visible' : '';

    /**
     * Remvoe empty rows
     * 
     */

    var $filteresRows = $rows.filter(function (row) {
      return row !== null;
    });

    return _react2['default'].createElement(
      'div',
      {
        key: index,
        className: 'valleForm__tabs__tab ' + tabVisibility
      },
      $filteresRows.length ? $filteresRows : _react2['default'].createElement(
        'spam',
        { className: 'valleForm__empty-message' },
        'N\xE3o h\xE1 campos dispon\xEDveis.'
      )
    );
  });

  /**
   * Render ValleForm
   * 
   */

  var rowsDataDone = tabs.length > 0;

  if (rowsDataDone) {

    return _react2['default'].createElement(
      'div',
      { className: 'valleForm', id: _id },
      _react2['default'].createElement(_Switch2['default'], {
        label: 'Limitar campos',
        readOnly: dynamicReadOnly,
        onChange: changeVisibleScreen,
        _id: String(_id) + '-switch'
      }),
      !(tabs.length === 1) ? _react2['default'].createElement(
        'div',
        { className: 'valleForm__tabs__titles' },
        $tabsTitles
      ) : null,
      $tabs,
      _react2['default'].createElement(
        'span',
        { className: 'valleForm__sub' },
        '* Campos obrigat\xF3rios'
      ),
      Array.isArray(buttons) && buttons.length ? _react2['default'].createElement(
        'valle-speed-dial',
        {
          id: 'valleSpeedDial',
          'class': 'valleForm__speedDial',
          ref: speedDial
        },
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
          token: token,
          getData: getData,
          closeSpeedDial: closeSpeedDial,
          updateValleList: updateValleList,
          tabErrorCount: tabErrorCount,
          setCleanup: setCleanup
        })
      ) : null
    );
  } else {

    return $loading;
  }
};

exports['default'] = ValleForm;