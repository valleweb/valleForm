export default _id => {

  // -----------
  // TODO: Remove this. Use a React memory reference instead.
  // -----------

  const formScope =  document.getElementById(_id);
  const allFields = formScope.querySelectorAll(`[data-valle-field]`);

  const fieldsParams = {};
  let hasError = false;

  allFields.forEach(field => {

    // Individual validation
    if(field.error || field['data-valle-error'] == 'true') {
      hasError = true;
    }

    // Global required validation
    if((field.required || field.dataset.valleRequired == 'true') && (!field.value || field.value == '')) {
      hasError = true;
      field.setAttribute('error', 'true');
      field.setAttribute('data-valle-error', 'true');
    }

    fieldsParams[field.dataset.valleField] = field.value ? field.value : '';

  })

  return hasError ? false : fieldsParams;

}
