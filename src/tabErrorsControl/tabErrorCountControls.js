import addTabErrorCount from './addTabErrorCount';
import removeTabErrorCount from './removeTabErrorCount';

const tabErrorCountControls = (
  tabErrorsCount,
  setTabErrorsCount,
) => {

  return {
    add: (tabIdentifier, fieldId) => addTabErrorCount(
      tabIdentifier,
      fieldId,
      tabErrorsCount,
      setTabErrorsCount,
    ),
    remove: (tabIdentifier, fieldId) => removeTabErrorCount(
      tabIdentifier,
      fieldId,
      tabErrorsCount,
      setTabErrorsCount,
    ),
    addMulttiples: tabsWithFields => setTabErrorsCount(tabsWithFields),
  }

}

export default tabErrorCountControls;