Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

exports['default'] = function (options, currentValue) {

  var $options = options.map(function (option, index) {

    /**
     * TODO: Use a normalize prop function
     * 
     */

    if (option.value === currentValue) {
      return _react2['default'].createElement(
        'valle-option',
        {
          value: option.value,
          key: index,
          selected: true
        },
        option.text
      );
    }

    return _react2['default'].createElement(
      'valle-option',
      {
        value: option.value,
        key: index
      },
      option.text
    );
  });

  return $options;
};