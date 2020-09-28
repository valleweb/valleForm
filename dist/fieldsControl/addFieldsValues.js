Object.defineProperty(exports, "__esModule", {
  value: true
});

exports["default"] = function (defaultFieldsValues, _id) {

  // -----------
  // TODO: Refactor: Add allFields to state. Allow reuse this reference (here and cleanForm)
  // Controls default values
  // -----------

  var formScope = document.getElementById(_id);
  var allFields = formScope.querySelectorAll("[data-valle-field]");

  allFields.forEach(function (field) {
    var fieldKey = field.dataset.valleField;

    if (defaultFieldsValues[fieldKey]) {
      field.value = defaultFieldsValues[fieldKey];
    }
  });
};