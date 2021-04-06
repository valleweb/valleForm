Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _apiCreate = require('../../rest/apiCreate');

var _apiCreate2 = _interopRequireDefault(_apiCreate);

var _apiUpdate = require('../../rest/apiUpdate');

var _apiUpdate2 = _interopRequireDefault(_apiUpdate);

var _apiDelete = require('../../rest/apiDelete');

var _apiDelete2 = _interopRequireDefault(_apiDelete);

var _apiReport = require('../../rest/apiReport');

var _apiReport2 = _interopRequireDefault(_apiReport);

var _apiEmail = require('../../rest/apiEmail');

var _apiEmail2 = _interopRequireDefault(_apiEmail);

var _apiCustomRequest = require('../../rest/apiCustomRequest');

var _apiCustomRequest2 = _interopRequireDefault(_apiCustomRequest);

var _shortid = require('shortid');

var _shortid2 = _interopRequireDefault(_shortid);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

/**
 * TODO: Add JSDocs
 *
 */

exports['default'] = makeDefaultsSpeedDialActions = function makeDefaultsSpeedDialActions(_ref) {
  var button = _ref.button,
      baseApi = _ref.baseApi,
      canonicalApi = _ref.canonicalApi,
      params = _ref.params,
      feedbackCb = _ref.feedbackCb,
      editCb = _ref.editCb,
      _id = _ref._id,
      cancelCb = _ref.cancelCb,
      formCb = _ref.formCb,
      newCB = _ref.newCB,
      copyCB = _ref.copyCB,
      token = _ref.token,
      _ref$getData = _ref.getData,
      getData = _ref$getData === undefined ? null : _ref$getData,
      closeSpeedDial = _ref.closeSpeedDial,
      updateValleList = _ref.updateValleList,
      tabErrorCount = _ref.tabErrorCount,
      setCleanup = _ref.setCleanup;


  /**
   * -----
   *
   */

  if (button.action == 'save') {
    return _react2['default'].createElement(
      'valle-speed-dial-action',
      {
        'class': 'valleForm__speedDial__save',
        key: _shortid2['default'].generate(),
        sloted: true,
        label: button.text,
        'label-direction': 'left',
        onClick: function () {
          function onClick() {

            (0, _apiCreate2['default'])(baseApi, canonicalApi, params, feedbackCb, token, _id, closeSpeedDial, updateValleList, tabErrorCount, setCleanup);
          }

          return onClick;
        }() },
      _react2['default'].createElement(
        'svg',
        { xmlns: 'http://www.w3.org/2000/svg', width: '24', height: '24', viewBox: '0 0 24 24' },
        _react2['default'].createElement('path', { fill: 'none', d: 'M0 0h24v24H0z' }),
        _react2['default'].createElement('path', { d: 'M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z', fill: '#fff' })
      )
    );
  }

  /**
   * -----
   *
   */

  if (button.action == 'edit') {
    return _react2['default'].createElement(
      'valle-speed-dial-action',
      {
        'class': 'valleForm__speedDial__edit',
        key: _shortid2['default'].generate(),
        sloted: true,
        label: button.text,
        'label-direction': 'left',
        onClick: editCb },
      _react2['default'].createElement(
        'svg',
        { xmlns: 'http://www.w3.org/2000/svg', width: '24', height: '24', viewBox: '0 0 24 24' },
        _react2['default'].createElement('path', { d: 'M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z', fill: '#fff' }),
        _react2['default'].createElement('path', { d: 'M0 0h24v24H0z', fill: 'none' })
      )
    );
  }

  /**
   * -----
   *
   */

  if (button.action == 'update') {
    return _react2['default'].createElement(
      'valle-speed-dial-action',
      {
        'class': 'valleForm__speedDial__save',
        key: _shortid2['default'].generate(),
        sloted: true,
        label: button.text,
        'label-direction': 'left',
        onClick: function () {
          function onClick() {

            (0, _apiUpdate2['default'])(baseApi, canonicalApi, params, _id, feedbackCb, formCb, token, closeSpeedDial, updateValleList, tabErrorCount);
          }

          return onClick;
        }() },
      _react2['default'].createElement(
        'svg',
        { xmlns: 'http://www.w3.org/2000/svg', width: '24', height: '24', viewBox: '0 0 24 24' },
        _react2['default'].createElement('path', { fill: 'none', d: 'M0 0h24v24H0z' }),
        _react2['default'].createElement('path', { d: 'M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z', fill: '#fff' })
      )
    );
  }

  /**
   * -----
   *
   */

  if (button.action == 'cancel') {
    return _react2['default'].createElement(
      'valle-speed-dial-action',
      {
        'class': 'valleForm__speedDial__cancel',
        key: _shortid2['default'].generate(),
        sloted: true,
        label: button.text,
        'label-direction': 'left',
        onClick: cancelCb },
      _react2['default'].createElement(
        'svg',
        { xmlns: 'http://www.w3.org/2000/svg', width: '24', height: '24', viewBox: '0 0 24 24' },
        _react2['default'].createElement('path', { d: 'M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z', fill: '#fff' }),
        _react2['default'].createElement('path', { d: 'M0 0h24v24H0z', fill: 'none' })
      )
    );
  }

  /**
   * -----
   *
   */

  if (button.action == 'delete') {
    return _react2['default'].createElement(
      'valle-speed-dial-action',
      {
        'class': 'valleForm__speedDial__delete',
        key: _shortid2['default'].generate(),
        sloted: true,
        label: button.text,
        'label-direction': 'left',
        onClick: function () {
          function onClick() {

            (0, _apiDelete2['default'])(baseApi, canonicalApi, params, _id, feedbackCb, newCB, token, closeSpeedDial, updateValleList);
          }

          return onClick;
        }() },
      _react2['default'].createElement(
        'svg',
        { xmlns: 'http://www.w3.org/2000/svg', width: '24', height: '24', viewBox: '0 0 24 24' },
        _react2['default'].createElement('path', { fill: 'none', d: 'M0 0h24v24H0V0z' }),
        _react2['default'].createElement('path', { d: 'M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zm2.46-7.12l1.41-1.41L12 12.59l2.12-2.12 1.41 1.41L13.41 14l2.12 2.12-1.41 1.41L12 15.41l-2.12 2.12-1.41-1.41L10.59 14l-2.13-2.12zM15.5 4l-1-1h-5l-1 1H5v2h14V4z', fill: '#fff' }),
        _react2['default'].createElement('path', { fill: 'none', d: 'M0 0h24v24H0z' })
      )
    );
  }

  /**
   * -----
   *
   */

  if (button.action == 'new') {
    return _react2['default'].createElement(
      'valle-speed-dial-action',
      {
        'class': 'valleForm__speedDial__new',
        key: _shortid2['default'].generate(),
        sloted: true,
        label: button.text,
        'label-direction': 'left',
        onClick: newCB },
      _react2['default'].createElement(
        'svg',
        { xmlns: 'http://www.w3.org/2000/svg', width: '20', height: '20', viewBox: '0 0 24 24' },
        _react2['default'].createElement('path', { fill: '#fff', d: 'M24 10h-10v-10h-4v10h-10v4h10v10h4v-10h10z' })
      )
    );
  }

  /**
   * -----
   *
   */

  if (button.action == 'copy') {
    return _react2['default'].createElement(
      'valle-speed-dial-action',
      {
        'class': 'valleForm__speedDial__copy',
        key: _shortid2['default'].generate(),
        sloted: true,
        label: button.text,
        'label-direction': 'left',
        onClick: copyCB },
      _react2['default'].createElement(
        'svg',
        { xmlns: 'http://www.w3.org/2000/svg', width: '20', height: '20', viewBox: '0 0 24 24' },
        _react2['default'].createElement('path', { fill: '#fff', d: 'M22 6v16h-16v-16h16zm2-2h-20v20h20v-20zm-24 17v-21h21v2h-19v19h-2zm18-8h-3v-3h-2v3h-3v2h3v3h2v-3h3v-2z' })
      )
    );
  }

  /**
   * -----
   *
   */

  if (button.action == 'report') {
    return _react2['default'].createElement(
      'valle-speed-dial-action',
      {
        'class': '',
        key: _shortid2['default'].generate(),
        sloted: true,
        label: button.text,
        'label-direction': 'left',
        onClick: function () {
          function onClick() {

            (0, _apiReport2['default'])(baseApi, params, feedbackCb, token, closeSpeedDial, button.id, button.action);
          }

          return onClick;
        }() },
      _react2['default'].createElement(
        'svg',
        { xmlns: 'http://www.w3.org/2000/svg', fill: '#fff', width: '19', height: '19', viewBox: '0 0 24 24' },
        _react2['default'].createElement('path', { d: 'M22 13v-13h-20v24h8.409c4.857 0 3.335-8 3.335-8 3.009.745 8.256.419 8.256-3zm-4-7h-12v-1h12v1zm0 3h-12v-1h12v1zm0 3h-12v-1h12v1zm-2.091 6.223c2.047.478 4.805-.279 6.091-1.179-1.494 1.998-5.23 5.708-7.432 6.881 1.156-1.168 1.563-4.234 1.341-5.702z' })
      )
    );
  }

  /**
   * -----
   *
   */

  if (button.action == 'email_confirmation') {
    return _react2['default'].createElement(
      'valle-speed-dial-action',
      {
        'class': 'valleForm__speedDial__copy',
        key: _shortid2['default'].generate(),
        sloted: true,
        label: button.text,
        'label-direction': 'left',
        onClick: function () {
          function onClick() {

            (0, _apiEmail2['default'])(baseApi, _id, feedbackCb, token, closeSpeedDial);
          }

          return onClick;
        }() },
      _react2['default'].createElement(
        'svg',
        { xmlns: 'http://www.w3.org/2000/svg', width: '20', height: '20', viewBox: '0 0 24 24' },
        _react2['default'].createElement('path', { fill: '#fff', d: 'M12 12.713l-11.985-9.713h23.97l-11.985 9.713zm0 2.574l-12-9.725v15.438h24v-15.438l-12 9.725z' })
      )
    );
  }

  /**
   * -----
   *
   */

  return _react2['default'].createElement(
    'valle-speed-dial-action',
    {
      'class': '',
      key: _shortid2['default'].generate(),
      sloted: true,
      label: button.text,
      'label-direction': 'left',
      onClick: function () {
        function onClick() {

          var requestParams = {
            getData: getData,
            action: button.action,
            button_id: button.id,
            baseApi: baseApi,
            params: params,
            token: token,
            _id: _id,
            endpoint: button.endpoint,
            feedbackCb: feedbackCb,
            tabErrorCount: tabErrorCount,
            closeSpeedDial: closeSpeedDial,
            updateValleList: updateValleList,
            setCleanup: setCleanup,
            customParams: params
          };

          closeSpeedDial();
          (0, _apiCustomRequest2['default'])(requestParams);
        }

        return onClick;
      }() },
    _react2['default'].createElement(
      'svg',
      { xmlns: 'http://www.w3.org/2000/svg', width: '24', height: '24', viewBox: '0 0 24 24' },
      _react2['default'].createElement('path', { fill: '#fff', d: 'M8 10h-5l9-10 9 10h-5v10h-8v-10zm8 12h-8v2h8v-2z' })
    )
  );
};