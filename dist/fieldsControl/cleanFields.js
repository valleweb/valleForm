
Object.defineProperty(exports, "__esModule", {
  value: true
});

var _nanoid = require('nanoid');

var _cleanUploadInput = require('../helpers/cleanUploadInput');

var _cleanUploadInput2 = _interopRequireDefault(_cleanUploadInput);

var _cleanPlate = require('../helpers/cleanPlate');

var _cleanPlate2 = _interopRequireDefault(_cleanPlate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

exports['default'] = function (_id, setCleanup) {

  // -----------
  // TODO: Remove this. Use a React memory reference instead.
  // -----------

  var formScope = document.getElementById(_id);
  var allFields = formScope.querySelectorAll('[data-valle-field]');

  allFields.forEach(function (field) {

    field.removeAttribute('error');
    field.removeAttribute('data-valle-error');

    if (!field.dataset.hasDefaultValue) {
      field.value = '';
    }

    if (field.dataset.fakeUploadRef) {
      (0, _cleanUploadInput2['default'])(formScope, field.dataset);
    }

    if (field.dataset.plate) {
      (0, _cleanPlate2['default'])(formScope);
    }
  });

  if (setCleanup) {
    setCleanup((0, _nanoid.nanoid)());
  }
};