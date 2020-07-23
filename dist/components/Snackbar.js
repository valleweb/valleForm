Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Snackbar = function Snackbar(_ref) {
  var report = _ref.report,
      type = _ref.type;


  var icon = void 0;

  switch (type) {
    case "success":
      icon = _react2["default"].createElement(
        "svg",
        { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", className: "valleForm__snackbar__icon" },
        _react2["default"].createElement("path", { d: "M0 0h24v24H0z", fill: "none" }),
        _react2["default"].createElement("path", { d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z", fill: "#7bcc02" })
      );
      break;
    case "error":
      icon = _react2["default"].createElement(
        "svg",
        { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", className: "valleForm__snackbar__icon" },
        _react2["default"].createElement("path", { d: "M0 0h24v24H0z", fill: "none" }),
        _react2["default"].createElement("path", { d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z", fill: "#f4ee42" })
      );
      break;
  }

  return _react2["default"].createElement(
    "span",
    { className: "valleForm__snackbar valleForm__snackbar--open" },
    icon,
    report
  );
};

exports["default"] = Snackbar;