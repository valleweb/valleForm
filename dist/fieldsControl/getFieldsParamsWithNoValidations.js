Object.defineProperty(exports, "__esModule", {
  value: true
});

var _patternUnformater = require('../helpers/patternUnformater');

var _patternUnformater2 = _interopRequireDefault(_patternUnformater);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

exports['default'] = function (_id) {

  // -----------
  // TODO: Remove this. Use a React memory reference instead.
  // -----------

  var formScope = document.getElementById(_id);
  var allFields = formScope.querySelectorAll('[data-valle-field]');

  var fieldsParams = {};

  allFields.forEach(function (field) {

    if (field.mask) {
      fieldsParams[field.dataset.valleField] = {
        value: (0, _patternUnformater2['default'])(field.mask, field.value ? field.value : null),
        ref: field
      };
    } else {
      fieldsParams[field.dataset.valleField] = {
        value: field.value ? field.value : null,
        ref: field
      };
    }
  });

  return fieldsParams;
};