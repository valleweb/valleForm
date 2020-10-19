const addTabErrorCount = (
  tabIdentifier,
  fieldId,
  tabErrorsCount,
  setTabErrorsCount,
) => {

  const updatedErrorCount = {
    ...tabErrorsCount,
    [tabIdentifier]: {
      ...tabErrorsCount[tabIdentifier],
      [fieldId]: true,
    }
  }

  setTabErrorsCount(updatedErrorCount);

}

export default addTabErrorCount;