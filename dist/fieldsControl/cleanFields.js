Object.defineProperty(exports, "__esModule", {
  value: true
});

exports['default'] = function (_id) {

  // -----------
  // TODO: Remove this. Use a React memory reference instead.
  // -----------

  var formScope = document.getElementById(_id);
  var allFields = formScope.querySelectorAll('[data-valle-field]');

  allFields.forEach(function (field) {

    field.removeAttribute('error');
    field.removeAttribute('data-valle-error');

    field.value = '';
  });
};