import patternUnformater from '../helpers/patternUnformater';

export default (_id, tabErrorCount) => {

  // -----------
  // TODO: Remove this. Use a React memory reference instead.
  // -----------

  const formScope =  document.getElementById(_id);
  const allFields = formScope.querySelectorAll(`[data-valle-field]`);

  const fieldsParams = {};
  let hasError = false;

  let tabErrorsCount = {};

  allFields.forEach(field => {

    // Individual validation
    if(field.error || field['data-valle-error'] == 'true') {
      hasError = true;
    }

    const isRequired = (field.required || field.dataset.valleRequired == 'true');
    const isFalse = !field.value;
    const isZero = field.value === 0;
    const isEmptyString = field.value === '';

    // Global required validation
    if(isRequired && ((isFalse && !isZero) || isEmptyString)) {
      hasError = true;
      field.setAttribute('error', 'true');
      field.setAttribute('data-valle-error', 'true');

      /**
       * Mount tab errors count data
       *
       */

      tabErrorsCount = {
          ...tabErrorsCount,
          [field.dataset.tabidentifier]: {
            ...tabErrorsCount[field.dataset.tabidentifier],
            [field.id]: true,
          }
        }

    }

    /**
     * -----
     *
     */

    if(field.mask) {
      fieldsParams[field.dataset.valleField] = patternUnformater(field.mask, (field.value || field.value === 0 ) ? field.value : null);
    } else {
      fieldsParams[field.dataset.valleField] = (field.value || field.value === 0 ) ? field.value : null;
    }

  })

  /**
   * -----
   *
   */

  if(hasError) {

    tabErrorCount.addMulttiples(tabErrorsCount);
    return false;

  } else {

    return fieldsParams;

  }

}
