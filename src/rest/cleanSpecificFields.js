export default (FieldsValues, allFields) => {

  console.log('Clean specifics fields:');
  console.log(FieldsValues);
  console.log('=======================');

  allFields.forEach(field => {

    const fieldKey = field.dataset.valleField;

    if(FieldsValues[fieldKey]) {
      field.value = "";
    }

  });

}