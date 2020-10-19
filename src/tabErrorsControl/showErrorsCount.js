const showErrorsCount = (tabErrorsCount, tabIdentifier) => {

  let tabErrors = null;

  const tabFields = tabErrorsCount[tabIdentifier] || {};
  const tabFieldsKeys = Object.keys(tabFields);

  for (let i = 0; i < tabFieldsKeys.length; i++) {

    const fieldId = tabFieldsKeys[i];
    if(tabFields[fieldId]) tabErrors++;

  }

  return tabErrors;

}

export default showErrorsCount;