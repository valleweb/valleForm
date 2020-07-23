export default _id => {

  // -----------
  // TODO: Remove this. Use a React memory reference instead.
  // -----------

  const formScope =  document.getElementById(_id);
  const allFields = formScope.querySelectorAll(`[data-valle-field]`);

  allFields.forEach(field => {

    field.removeAttribute('error');
    field.removeAttribute('data-valle-error');

    field.value = '';

  });

}
