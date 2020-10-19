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

    // Global required validation
    if((field.required || field.dataset.valleRequired == 'true') && (!field.value || field.value == '')) {
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

    fieldsParams[field.dataset.valleField] = field.value ? field.value : null;

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
