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

  // console.log(defaultFieldsValues);

  allFields.forEach(function (field) {

    var fieldKey = field.dataset.valleField;

    if (defaultFieldsValues[fieldKey] || defaultFieldsValues[fieldKey] == 0) {

      // console.log('---------------')
      // console.log(field.id)
      // console.log(defaultFieldsValues[fieldKey])
      // console.log('---------------')

      field.value = defaultFieldsValues[fieldKey];
    }
  });
};