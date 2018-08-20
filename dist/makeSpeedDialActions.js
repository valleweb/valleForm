Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _apiCreate = require('./apiCreate');

var _apiCreate2 = _interopRequireDefault(_apiCreate);

var _apiUpdate = require('./apiUpdate');

var _apiUpdate2 = _interopRequireDefault(_apiUpdate);

var _apiDelete = require('./apiDelete');

var _apiDelete2 = _interopRequireDefault(_apiDelete);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

exports['default'] = function (data) {

	// --------------
	// Ceate a new register state
	// --------------

	if (!data.states.readOnly && !data.states.editable) {
		return _react2['default'].createElement(
			'span',
			null,
			_react2['default'].createElement(
				'valle-speed-dial-action',
				{
					'class': 'valleForm__speedDial__save',
					sloted: true,
					label: 'Salvar',
					'label-direction': 'left',
					onClick: function () {
						function onClick() {
							return (0, _apiCreate2['default'])(data.props.baseApi, data.props.canonicalApi, data.props.params, data.feedbackCb);
						}

						return onClick;
					}() },
				_react2['default'].createElement(
					'svg',
					{ xmlns: 'http://www.w3.org/2000/svg', width: '24', height: '24', viewBox: '0 0 24 24' },
					_react2['default'].createElement('path', { fill: 'none', d: 'M0 0h24v24H0z' }),
					_react2['default'].createElement('path', { d: 'M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z', fill: '#fff' })
				)
			)
		);
	}

	// --------------
	// Ready only state
	// --------------

	if (data.states.readOnly && !data.states.editable) {
		return _react2['default'].createElement(
			'span',
			null,
			_react2['default'].createElement(
				'valle-speed-dial-action',
				{
					'class': 'valleForm__speedDial__edit',
					sloted: true,
					label: 'Editar',
					'label-direction': 'left',
					onClick: data.editCb },
				_react2['default'].createElement(
					'svg',
					{ xmlns: 'http://www.w3.org/2000/svg', width: '24', height: '24', viewBox: '0 0 24 24' },
					_react2['default'].createElement('path', { d: 'M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z', fill: '#fff' }),
					_react2['default'].createElement('path', { d: 'M0 0h24v24H0z', fill: 'none' })
				)
			)
		);
	}

	// --------------
	// Editable only state
	// --------------

	if (!data.states.readOnly && data.states.editable) {
		return _react2['default'].createElement(
			'span',
			{ className: 'valleForm__speedDial__actions' },
			_react2['default'].createElement(
				'valle-speed-dial-action',
				{
					'class': 'valleForm__speedDial__save',
					sloted: true,
					label: 'Salvar\xA0altera\xE7\u014Des',
					'label-direction': 'left',
					onClick: function () {
						function onClick() {
							return (0, _apiUpdate2['default'])(data.props.baseApi, data.props.canonicalApi, data.props.params, data.props._id, data.feedbackCb);
						}

						return onClick;
					}() },
				_react2['default'].createElement(
					'svg',
					{ xmlns: 'http://www.w3.org/2000/svg', width: '24', height: '24', viewBox: '0 0 24 24' },
					_react2['default'].createElement('path', { fill: 'none', d: 'M0 0h24v24H0z' }),
					_react2['default'].createElement('path', { d: 'M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z', fill: '#fff' })
				)
			),
			_react2['default'].createElement(
				'valle-speed-dial-action',
				{
					'class': 'valleForm__speedDial__delete',
					sloted: true,
					label: 'Excluir',
					'label-direction': 'left',
					onClick: function () {
						function onClick() {
							return (0, _apiDelete2['default'])(data.props.baseApi, data.props.canonicalApi, data.props.params, data.props._id, data.feedbackCb);
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
			),
			_react2['default'].createElement(
				'valle-speed-dial-action',
				{
					'class': 'valleForm__speedDial__cancel',
					sloted: true,
					label: 'Cancelar',
					'label-direction': 'left',
					onClick: data.cancelCb },
				_react2['default'].createElement(
					'svg',
					{ xmlns: 'http://www.w3.org/2000/svg', width: '24', height: '24', viewBox: '0 0 24 24' },
					_react2['default'].createElement('path', { d: 'M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z', fill: '#fff' }),
					_react2['default'].createElement('path', { d: 'M0 0h24v24H0z', fill: 'none' })
				)
			)
		);
	}
};