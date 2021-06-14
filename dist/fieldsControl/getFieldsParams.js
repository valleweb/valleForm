Object.defineProperty(exports, "__esModule", {
  value: true
});

var _patternUnformater = require('../helpers/patternUnformater');

var _patternUnformater2 = _interopRequireDefault(_patternUnformater);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

exports['default'] = function (_id, tabErrorCount) {

  // -----------
  // TODO: Remove this. Use a React memory reference instead.
  // -----------

  var formScope = document.getElementById(_id);
  var allFields = formScope.querySelectorAll('[data-valle-field]');

  var fieldsParams = {};
  var hasError = false;

  var tabErrorsCount = {};

  allFields.forEach(function (field) {

    // Individual validation
    if (field.error || field['data-valle-error'] == 'true') {
      hasError = true;
    }

    var isRequired = field.required || field.dataset.valleRequired == 'true';
    var isFalse = !field.value;
    var isZero = field.value === 0;
    var isEmptyString = field.value === '';

    // Global required validation
    if (isRequired && (isFalse && !isZero || isEmptyString)) {
      hasError = true;
      field.setAttribute('error', 'true');
      field.setAttribute('data-valle-error', 'true');

      /**
       * Mount tab errors count data
       *
       */

      tabErrorsCount = Object.assign({}, tabErrorsCount, _defineProperty({}, field.dataset.tabidentifier, Object.assign({}, tabErrorsCount[field.dataset.tabidentifier], _defineProperty({}, field.id, true))));
    }

    /**
     * -----
     *
     */

    if (field.mask) {
      fieldsParams[field.dataset.valleField] = (0, _patternUnformater2['default'])(field.mask, field.value || field.value === 0 ? field.value : null);
    } else {
      fieldsParams[field.dataset.valleField] = field.value || field.value === 0 ? field.value : null;
    }
  });

  /**
   * -----
   *
   */

  if (hasError) {

    tabErrorCount.addMulttiples(tabErrorsCount);
    return false;
  } else {

    return fieldsParams;
  }
};