Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _makeDefaultsSpeedDialActions = require('./makeDefaultsSpeedDialActions');

var _makeDefaultsSpeedDialActions2 = _interopRequireDefault(_makeDefaultsSpeedDialActions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

exports['default'] = function (data) {

	// --------------
	// Filter actions by status
	// --------------

	var $createActions = data.props.buttons.filter(function (button) {
		return button.status == "create";
	}).map(function (button) {
		return (0, _makeDefaultsSpeedDialActions2['default'])(button, data);
	});

	var $retrievalActions = data.props.buttons.filter(function (button) {
		return button.status == "retrieval";
	}).map(function (button) {
		return (0, _makeDefaultsSpeedDialActions2['default'])(button, data);
	});

	var $updateActions = data.props.buttons.filter(function (button) {
		return button.status == "update";
	}).map(function (button) {
		return (0, _makeDefaultsSpeedDialActions2['default'])(button, data);
	});

	// --------------
	// Ceate a new register state
	// --------------

	if (!data.states.readOnly && !data.states.editable) {
		return _react2['default'].createElement(
			'span',
			{ className: 'valleForm__speedDial__actions' },
			$createActions
		);
	}

	// --------------
	// Ready only state
	// --------------

	if (data.states.readOnly && !data.states.editable) {
		return _react2['default'].createElement(
			'span',
			{ className: 'valleForm__speedDial__actions' },
			$retrievalActions
		);
	}

	// --------------
	// Editable only state
	// --------------

	if (!data.states.readOnly && data.states.editable) {
		return _react2['default'].createElement(
			'span',
			{ className: 'valleForm__speedDial__actions' },
			$updateActions
		);
	}
};