Object.defineProperty(exports, "__esModule", {
  value: true
});

exports['default'] = function (_id) {

  // -----------
  // TODO: Remove this. Use a React memory reference instead.
  // -----------

  var formScope = document.getElementById(_id);
  var allFields = formScope.querySelectorAll('[data-valle-field]');

  var fieldsParams = {};

  allFields.forEach(function (field) {
    fieldsParams[field.dataset.valleField] = {
      value: field.value ? field.value : '',
      ref: field
    };
  });

  return fieldsParams;
};