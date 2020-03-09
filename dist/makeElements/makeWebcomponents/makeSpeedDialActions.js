Object.defineProperty(exports, "__esModule", {
	value: true
});

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
	    token = _ref.token;


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
			token: token
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
			token: token
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
			token: token
		});
	});

	// --------------
	// Ceate a new register state
	// --------------

	if (!readOnly && !editable) {
		return _react2['default'].createElement(
			'span',
			{ className: 'valleForm__speedDial__actions' },
			$createActions
		);
	}

	// --------------
	// Ready only state
	// --------------

	if (readOnly && !editable) {
		return _react2['default'].createElement(
			'span',
			{ className: 'valleForm__speedDial__actions' },
			$retrievalActions
		);
	}

	// --------------
	// Editable only state
	// --------------

	if (!readOnly && editable) {
		return _react2['default'].createElement(
			'span',
			{ className: 'valleForm__speedDial__actions' },
			$updateActions
		);
	}
};