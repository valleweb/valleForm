Object.defineProperty(exports, "__esModule", {
  value: true
});

var _cleanUploadInput = require('../helpers/cleanUploadInput');

var _cleanUploadInput2 = _interopRequireDefault(_cleanUploadInput);

var _populateUploadInput = require('../helpers/populateUploadInput');

var _populateUploadInput2 = _interopRequireDefault(_populateUploadInput);

var _populatePlate = require('../helpers/populatePlate');

var _populatePlate2 = _interopRequireDefault(_populatePlate);

var _patternFormater = require('../helpers/patternFormater');

var _patternFormater2 = _interopRequireDefault(_patternFormater);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

exports['default'] = function (defaultFieldsValues, _id) {

  // -----------
  // TODO: Refactor: Add allFields to state. Allow reuse this reference (here and cleanForm)
  // Controls default values
  // -----------

  var formScope = document.getElementById(_id);
  var allFields = formScope.querySelectorAll('[data-valle-field]');

  // console.log(defaultFieldsValues);

  allFields.forEach(function (field) {

    var fieldKey = field.dataset.valleField;

    if (defaultFieldsValues[fieldKey] || defaultFieldsValues[fieldKey] == 0) {

      // console.log('---------------')
      // console.log(field.id)
      // console.log(defaultFieldsValues[fieldKey])
      // console.log('---------------')

      if (field.dataset.fakeUploadRef) {
        (0, _populateUploadInput2['default'])(formScope, field.dataset, defaultFieldsValues[fieldKey]);
      }

      if (field.dataset.plate) {
        (0, _populatePlate2['default'])(formScope, defaultFieldsValues[fieldKey]);
      }

      if (field.mask) {
        field.value = (0, _patternFormater2['default'])(field.mask, defaultFieldsValues[fieldKey]);
      } else {
        field.value = defaultFieldsValues[fieldKey];
      }
    }
  });
};