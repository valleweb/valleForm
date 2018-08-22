Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _makeJsxRows = require('./makeJsxRows');

var _makeJsxRows2 = _interopRequireDefault(_makeJsxRows);

var _makeSpeedDialActions = require('./makeSpeedDialActions');

var _makeSpeedDialActions2 = _interopRequireDefault(_makeSpeedDialActions);

var _Snackbar = require('./Snackbar');

var _Snackbar2 = _interopRequireDefault(_Snackbar);

var _Switch = require('./Switch');

var _Switch2 = _interopRequireDefault(_Switch);

var _apiCreate = require('./apiCreate');

var _apiCreate2 = _interopRequireDefault(_apiCreate);

var _addFieldsValues = require('./addFieldsValues');

var _addFieldsValues2 = _interopRequireDefault(_addFieldsValues);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ValleForm = function (_Component) {
	_inherits(ValleForm, _Component);

	function ValleForm() {
		_classCallCheck(this, ValleForm);

		var _this = _possibleConstructorReturn(this, (ValleForm.__proto__ || Object.getPrototypeOf(ValleForm)).call(this));

		_this.state = {
			filterByVisibleScreen: false,
			readOnly: false,
			editable: false,
			valleSpeedDialRef: null,
			defaultFieldsValues: null,
			feedback: {
				open: false,
				text: '',
				type: ''
			}
		};
		return _this;
	}

	// -----------
	// Control vizualization only and editable states
	// -----------

	_createClass(ValleForm, [{
		key: 'componentDidMount',
		value: function () {
			function componentDidMount() {

				if (this.props.readOnly) {
					this.setState({ readOnly: true });
				}

				if (this.props.values) {
					(0, _addFieldsValues2['default'])(this.props.values);
					this.setState({ defaultFieldsValues: this.props.values });
				}

				// -----------
				// TODO: Remove this. Use a React memory reference instead.
				// -----------

				this.setState({ valleSpeedDialRef: document.getElementById('valleSpeedDial') });
			}

			return componentDidMount;
		}()
	}, {
		key: 'makeFieldsEditable',
		value: function () {
			function makeFieldsEditable() {
				this.setState({ readOnly: false, editable: true });
				this.state.valleSpeedDialRef.open = false;
			}

			return makeFieldsEditable;
		}()
	}, {
		key: 'removeFieldsEditable',
		value: function () {
			function removeFieldsEditable() {
				this.setState({ readOnly: true, editable: false });
				this.state.valleSpeedDialRef.open = false;
			}

			return removeFieldsEditable;
		}()
	}, {
		key: 'cancelFieldsEditable',
		value: function () {
			function cancelFieldsEditable() {
				this.setState({ readOnly: true, editable: false });
				this.state.valleSpeedDialRef.open = false;
				(0, _addFieldsValues2['default'])(this.state.defaultFieldsValues);
			}

			return cancelFieldsEditable;
		}()

		// -----------
		// Control visible fields
		// -----------

	}, {
		key: 'changeVisibleScreen',
		value: function () {
			function changeVisibleScreen() {
				this.state.filterByVisibleScreen ? this.setState({ filterByVisibleScreen: false }) : this.setState({ filterByVisibleScreen: true });
			}

			return changeVisibleScreen;
		}()

		// -----------
		// Control feedbacks status
		// -----------

	}, {
		key: 'showFeedback',
		value: function () {
			function showFeedback(text, type) {
				var _this2 = this;

				// Clear old feedback
				this.setState({ feedback: { open: false } });

				// Trick for second state change
				setTimeout(function () {
					_this2.setState({ feedback: { open: true, text: text, type: type } });
				}, 100);

				this.state.valleSpeedDialRef.open = false;
			}

			return showFeedback;
		}()

		// -----------
		// Control keyboard actions
		// -----------

	}, {
		key: 'handleKeyboard',
		value: function () {
			function handleKeyboard(event) {

				var pressEnter = event.which === 13 || event.keyCode === 13;

				if (pressEnter) {
					event.preventDefault();
					(0, _apiCreate2['default'])(this.props.baseApi, this.props.canonicalApi, this.props.params, this.showFeedback.bind(this));
				}
			}

			return handleKeyboard;
		}()
	}, {
		key: 'render',
		value: function () {
			function render() {
				var _this3 = this;

				// -----------
				// Control rows
				// -----------

				var $rows = (0, _makeJsxRows2['default'])(this.props.rows, this.state.filterByVisibleScreen, this.state.readOnly);

				// -----------
				// Control feedbacks reports
				// -----------

				var $feedback = this.state.feedback.open ? _react2['default'].createElement(_Snackbar2['default'], { report: this.state.feedback.text, type: this.state.feedback.type }) : null;

				if (this.props.rows.length > 0) {
					// Await the rows for renderize all component

					return _react2['default'].createElement(
						'div',
						{ className: 'valleForm', onKeyPress: this.handleKeyboard.bind(this) },
						_react2['default'].createElement(_Switch2['default'], {
							label: 'Limitar campos',
							readOnly: this.state.readOnly,
							onChange: function () {
								function onChange() {
									return _this3.changeVisibleScreen();
								}

								return onChange;
							}() }),
						$rows,
						_react2['default'].createElement(
							'span',
							{ className: 'valleForm__sub' },
							' * Campos obrigat\xF3rios '
						),
						_react2['default'].createElement(
							'valle-speed-dial',
							{ id: 'valleSpeedDial', 'class': 'valleForm__speedDial' },
							(0, _makeSpeedDialActions2['default'])({
								states: this.state,
								props: this.props,
								editCb: this.makeFieldsEditable.bind(this),
								cancelCb: this.cancelFieldsEditable.bind(this),
								feedbackCb: this.showFeedback.bind(this),
								formCb: this.removeFieldsEditable.bind(this)
							})
						),
						$feedback
					);
				} else {

					// -----------
					// TODO: Add loading.
					// -----------

					return _react2['default'].createElement('span', null);
				}
			}

			return render;
		}()
	}]);

	return ValleForm;
}(_react.Component);

exports['default'] = ValleForm;