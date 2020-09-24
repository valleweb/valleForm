export default _id => {

  // -----------
  // TODO: Remove this. Use a React memory reference instead.
  // -----------

  const formScope =  document.getElementById(_id);
  const allFields = formScope.querySelectorAll(`[data-valle-field]`);

  const fieldsParams = {};

  allFields.forEach(field => {
    fieldsParams[field.dataset.valleField] = field.value ? field.value : '';
  })

  return fieldsParams;

}