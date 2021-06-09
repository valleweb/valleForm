import patternUnformater from '../helpers/patternUnformater';

export default _id => {

  // -----------
  // TODO: Remove this. Use a React memory reference instead.
  // -----------

  const formScope =  document.getElementById(_id);
  const allFields = formScope.querySelectorAll(`[data-valle-field]`);

  const fieldsParams = {};

  allFields.forEach(field => {

    if(field.mask) {
      fieldsParams[field.dataset.valleField] = {
        value: patternUnformater(field.mask, field.value ? field.value : null),
        ref: field,
      }
    } else {
      fieldsParams[field.dataset.valleField] = {
        value: field.value ? field.value : null,
        ref: field,
      }
    }

  })

  return fieldsParams;

}
