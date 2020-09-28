Object.defineProperty(exports, "__esModule", {
  value: true
});

exports['default'] = function (FieldsValues, allFields) {

  console.log('Clean specifics fields:');
  console.log(FieldsValues);
  console.log('=======================');

  allFields.forEach(function (field) {

    var fieldKey = field.dataset.valleField;

    if (FieldsValues[fieldKey]) {
      field.value = "";
    }
  });
};