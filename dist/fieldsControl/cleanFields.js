Object.defineProperty(exports, "__esModule", {
  value: true
});

var _nanoid = require('nanoid');

exports['default'] = function (_id, setCleanup) {

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

  if (setCleanup) {
    setCleanup((0, _nanoid.nanoid)());
  }
};