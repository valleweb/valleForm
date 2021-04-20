Object.defineProperty(exports, "__esModule", {
  value: true
});

var _cleanUploadInput = require('../helpers/cleanUploadInput');

var _cleanUploadInput2 = _interopRequireDefault(_cleanUploadInput);

var _populateUploadInput = require('../helpers/populateUploadInput');

var _populateUploadInput2 = _interopRequireDefault(_populateUploadInput);

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

      field.value = defaultFieldsValues[fieldKey];
    }
  });
};