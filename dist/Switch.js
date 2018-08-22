Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Switch = function Switch(_ref) {
	var label = _ref.label,
	    _ref$readOnly = _ref.readOnly,
	    readOnly = _ref$readOnly === undefined ? false : _ref$readOnly,
	    onChange = _ref.onChange;


	var switchState = readOnly ? "valleForm__switch--disabled" : "";

	return _react2["default"].createElement(
		"span",
		{ className: "valleForm__switch " + switchState },
		_react2["default"].createElement(
			"label",
			{ className: "valleForm__switch__label", htmlFor: "input" },
			" ",
			label,
			" "
		),
		_react2["default"].createElement("input", {
			id: "input",
			className: "valleForm__switch__input",
			type: "checkbox",
			disabled: readOnly,
			onChange: onChange }),
		_react2["default"].createElement("label", { className: "valleForm__switch__toggle", htmlFor: "input" })
	);
};

exports["default"] = Switch;