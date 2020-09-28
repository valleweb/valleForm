Object.defineProperty(exports, "__esModule", {
  value: true
});

exports['default'] = function () {
  var fieldsValues = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var allFields = arguments[1];


  console.log('Clean specifics fields:');
  console.log(fieldsValues);
  console.log('=======================');

  allFields.forEach(function (field) {

    var fieldKey = field.dataset.valleField;

    if (fieldsValues[fieldKey]) {
      field.value = "";
    }
  });
};