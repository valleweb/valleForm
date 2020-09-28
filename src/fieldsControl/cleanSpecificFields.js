export default (fieldsValues, allFields) => {

  console.log('Clean specifics fields:');
  console.log(fieldsValues);
  console.log('=======================');

  console.log('All fields:');
  console.log(allFields);
  console.log('=======================');

  Object.keys(allFields).forEach(id => {

    if(fieldsValues[id]) {
      allFields[id].ref.value = "";
    }

  });

}