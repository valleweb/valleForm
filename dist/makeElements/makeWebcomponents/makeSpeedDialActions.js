Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _makeDefaultsSpeedDialActions = require('./makeDefaultsSpeedDialActions');

var _makeDefaultsSpeedDialActions2 = _interopRequireDefault(_makeDefaultsSpeedDialActions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

exports['default'] = function (_ref) {
  var buttons = _ref.buttons,
      readOnly = _ref.readOnly,
      editable = _ref.editable,
      baseApi = _ref.baseApi,
      canonicalApi = _ref.canonicalApi,
      params = _ref.params,
      _id = _ref._id,
      feedbackCb = _ref.feedbackCb,
      editCb = _ref.editCb,
      formCb = _ref.formCb,
      cancelCb = _ref.cancelCb,
      newCB = _ref.newCB,
      copyCB = _ref.copyCB,
      token = _ref.token,
      getData = _ref.getData,
      closeSpeedDial = _ref.closeSpeedDial,
      updateValleList = _ref.updateValleList,
      tabErrorCount = _ref.tabErrorCount,
      setCleanup = _ref.setCleanup,
      speedDial = _ref.speedDial;

  // --------------
  // Loading status
  var _useState = (0, _react.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      loading = _useState2[0],
      setLoading = _useState2[1];

  // --------------
  // Filter actions by status
  // --------------

  var $createActions = buttons.filter(function (button) {
    return button.status == "create";
  }).map(function (button) {
    return (0, _makeDefaultsSpeedDialActions2['default'])({
      button: button,
      baseApi: baseApi,
      canonicalApi: canonicalApi,
      params: params,
      feedbackCb: feedbackCb,
      editCb: editCb,
      _id: _id,
      cancelCb: cancelCb,
      formCb: formCb,
      newCB: newCB,
      copyCB: copyCB,
      token: token,
      getData: getData,
      closeSpeedDial: closeSpeedDial,
      updateValleList: updateValleList,
      tabErrorCount: tabErrorCount,
      setCleanup: setCleanup,
      setLoading: setLoading
    });
  });

  var $retrievalActions = buttons.filter(function (button) {
    return button.status == "retrieval";
  }).map(function (button) {
    return (0, _makeDefaultsSpeedDialActions2['default'])({
      button: button,
      baseApi: baseApi,
      canonicalApi: canonicalApi,
      params: params,
      feedbackCb: feedbackCb,
      editCb: editCb,
      _id: _id,
      cancelCb: cancelCb,
      formCb: formCb,
      newCB: newCB,
      copyCB: copyCB,
      token: token,
      getData: getData,
      closeSpeedDial: closeSpeedDial,
      updateValleList: updateValleList,
      tabErrorCount: tabErrorCount,
      setLoading: setLoading
    });
  });

  var $updateActions = buttons.filter(function (button) {
    return button.status == "update";
  }).map(function (button) {
    return (0, _makeDefaultsSpeedDialActions2['default'])({
      button: button,
      baseApi: baseApi,
      canonicalApi: canonicalApi,
      params: params,
      feedbackCb: feedbackCb,
      editCb: editCb,
      _id: _id,
      cancelCb: cancelCb,
      formCb: formCb,
      newCB: newCB,
      copyCB: copyCB,
      token: token,
      getData: getData,
      closeSpeedDial: closeSpeedDial,
      updateValleList: updateValleList,
      tabErrorCount: tabErrorCount,
      setLoading: setLoading
    });
  });

  // --------------
  // Create a new register state
  // --------------

  if (loading) {
    return _react2['default'].createElement(
      'valle-fab',
      {
        sloted: true,
        disabled: 'true',
        'class': 'valleForm__speedDial valleForm__speedDial--loading'
      },
      _react2['default'].createElement(
        'div',
        { 'class': 'valleForm__speedDial__loader', title: '0' },
        _react2['default'].createElement(
          'svg',
          { version: '1.1', xmlns: 'http://www.w3.org/2000/svg', x: '0px', y: '0px', width: '50px', height: '50px', viewBox: '0 0 40 37', 'enable-background': 'new 0 0 30 30' },
          _react2['default'].createElement(
            'title',
            null,
            ' Carregando '
          ),
          _react2['default'].createElement('path', { opacity: '0.2', fill: '#000', d: 'M20.201,5.169c-8.254,0-14.946,6.692-14.946,14.946c0,8.255,6.692,14.946,14.946,14.946 s14.946-6.691,14.946-14.946C35.146,11.861,28.455,5.169,20.201,5.169z M20.201,31.749c-6.425,0-11.634-5.208-11.634-11.634 c0-6.425,5.209-11.634,11.634-11.634c6.425,0,11.633,5.209,11.633,11.634C31.834,26.541,26.626,31.749,20.201,31.749z' }),
          _react2['default'].createElement(
            'path',
            { fill: '#000', d: 'M26.013,10.047l1.654-2.866c-2.198-1.272-4.743-2.012-7.466-2.012h0v3.312h0 C22.32,8.481,24.301,9.057,26.013,10.047z' },
            _react2['default'].createElement('animateTransform', { attributeType: 'xml',
              attributeName: 'transform',
              type: 'rotate',
              from: '0 20 20',
              to: '360 20 20',
              dur: '0.8s',
              repeatCount: 'indefinite' })
          )
        )
      )
    );
  }

  // --------------
  // Create a new register state
  // --------------

  if (!readOnly && !editable && $createActions.length) {
    return _react2['default'].createElement(
      'valle-speed-dial',
      {
        id: 'valleSpeedDial',
        'class': 'valleForm__speedDial',
        ref: speedDial
      },
      _react2['default'].createElement(
        'span',
        { className: 'valleForm__speedDial__actions' },
        $createActions
      )
    );
  }

  // --------------
  // Ready only state
  // --------------

  if (readOnly && !editable && $retrievalActions.length) {
    return _react2['default'].createElement(
      'valle-speed-dial',
      {
        id: 'valleSpeedDial',
        'class': 'valleForm__speedDial',
        ref: speedDial
      },
      _react2['default'].createElement(
        'span',
        { className: 'valleForm__speedDial__actions' },
        $retrievalActions
      )
    );
  }

  // --------------
  // Editable only state
  // --------------

  if (!readOnly && editable && $updateActions.length) {
    return _react2['default'].createElement(
      'valle-speed-dial',
      {
        id: 'valleSpeedDial',
        'class': 'valleForm__speedDial',
        ref: speedDial
      },
      _react2['default'].createElement(
        'span',
        { className: 'valleForm__speedDial__actions' },
        $updateActions
      )
    );
  }
};