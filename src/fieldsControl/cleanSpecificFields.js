export default (fieldsValues = [], allFields) => {

  console.log('Clean specifics fields:');
  console.log(fieldsValues);
  console.log('=======================');

  allFields.forEach(field => {

    const fieldKey = field.dataset.valleField;

    if(fieldsValues[fieldKey]) {
      field.value = "";
    }

  });

}