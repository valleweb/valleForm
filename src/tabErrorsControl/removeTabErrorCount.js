const removeTabErrorCount = (
  tabIdentifier,
  fieldId,
  tabErrorsCount,
  setTabErrorsCount,
) => {

  const updatedErrorCount = {
    ...tabErrorsCount,
    [tabIdentifier]: {
      ...tabErrorsCount[tabIdentifier],
      [fieldId]: false,
    }
  }

  setTabErrorsCount(updatedErrorCount);

}

export default removeTabErrorCount;