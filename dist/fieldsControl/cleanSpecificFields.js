
Object.defineProperty(exports, "__esModule", {
  value: true
});

exports['default'] = function (fieldsValues, allFields) {

  console.log('Clean specifics fields:');
  console.log(fieldsValues);
  console.log('=======================');

  console.log('All fields:');
  console.log(allFields);
  console.log('=======================');

  Object.keys(allFields).forEach(function (id) {

    if (fieldsValues[id]) {
      allFields[id].ref.value = "";
    }
  });
};