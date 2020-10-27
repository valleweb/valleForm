import React, { useState, useEffect } from 'react';

import makeJsxRows from './makeElements/makeJsxRows';
import makeSpeedDialActions from './makeElements/makeWebcomponents/makeSpeedDialActions';

import Switch from './components/Switch';

import addFieldsValues from './fieldsControl/addFieldsValues';
import cleanFields from './fieldsControl/cleanFields';
import makeIdentifier from './tabErrorsControl/makeIdentifier';
import tabErrorCountControls from './tabErrorsControl/tabErrorCountControls';
import showErrorsCount from './tabErrorsControl/showErrorsCount';

/**
 * TODO: Add JSDocs
 * 
 */

const ValleForm = ({
  tabs = [],
  _id = 'valleForm',
  values = null,
  readOnly = false,
  baseApi,
  canonicalApi,
  params,
  $loading = 'loading',
  buttons = [],
  token = '',
  getData,
  setSnackBarStatus = null,
  ValleList = null,
  updateValleList = null,
  cleanOldFormValues = null,
  }) => {

  const [dynamicReadOnly, setDynamicReadOnly] = useState(false);
  const [editable, setEditable] = useState(false); // For makeSpeedDialActionsl use
  const [filterByVisibleScreen, setFilterByVisibleScreen] = useState(false);
  const [visibleTab, setVisibleTab] = useState(0);
  const [cleanup, setCleanup] = useState(null);

  /**
   * Control tab error counter
   * 
   */

  const [tabErrorsCount, setTabErrorsCount] = useState({});

  /**
   * Inject the parent states inside the tab error functions
   * 
   */

  const tabErrorCount = tabErrorCountControls(
    tabErrorsCount,
    setTabErrorsCount,
  )

  /**
   * Control vizualization only and editable state
   * 
   */

  useEffect(() => setDynamicReadOnly(readOnly), [readOnly]);

  /**
   * Control dynamic values
   * 
   */

  useEffect(() => { if (values) cancelFieldsEditable() }, [values]);
  
  /**
   * Control fields visibility
   * 
   */

	const changeVisibleScreen = () => {
    filterByVisibleScreen
      ? setFilterByVisibleScreen(false)
      : setFilterByVisibleScreen(true);
	}

  /**
   * Control speed dial open state
   * 
   */

  const speedDial = React.createRef();

  const closeSpeedDial = () => {

    console.log('===========================');
    console.log('Speed Dial:');
    console.log(speedDial.current);
    console.log('===========================');

    if(speedDial.current) {
      speedDial.current.open = false;
    }

  };

  /**
   * Control fields states
   * 
   */

	const makeFieldsEditable = () => {
    setDynamicReadOnly(false);
		setEditable(true);
		closeSpeedDial();
  }
  
  const removeFieldsEditable = () => {
    setDynamicReadOnly(true);
		setEditable(false);
		closeSpeedDial();
  }
  
  const cancelFieldsEditable = () => {
    cleanFields(_id);
    addFieldsValues(values, _id);
    setDynamicReadOnly(true);
		setEditable(false);
		closeSpeedDial();
  }

  const makeFieldsDefault = () => {
    cleanFields(_id, setCleanup);
    setDynamicReadOnly(false);
		setEditable(false);
    closeSpeedDial();
    cleanOldFormValues();
	}

  /**
   * Control feedbacks status
   * 
   */

  const showFeedback = (text, type) => {

    if(setSnackBarStatus) {
      setSnackBarStatus({
        show: true,
        text: text,
        type: type,
      });
    }

  }

  /**
   * Control tabs visibility
   * 
   */

  const showTab = index => {
    setVisibleTab(index);
  }

  /**
   * Make Tabs titles
   * 
   */

  const $tabsTitles = tabs.map((tab, index) => {

    const isSelected = (visibleTab === index);
    const selectedTab = isSelected ? 'valleForm__tabs__title--selected' : '';

    /**
     * Get the tab error count
     * 
     */

    const tabIdentifier = makeIdentifier(tab.title, index);
    const errorsCount = showErrorsCount(tabErrorsCount, tabIdentifier);

    return (
      <button
        key = { index }
        className = { `valleForm__tabs__title ${selectedTab}` }
        onClick = { () => showTab(index) }
      >
        { tab.title }

        {
          errorsCount ? (
            <span className = 'valleForm__tabs__badge'> { errorsCount} </span>
          ) : null
        }

      </button>
    );

  });

  /**
   * Make Tabs
   * 
   */

  const $tabs = tabs.map((tab, index) => {

    const tabIdentifier = makeIdentifier(tab.title, index);

    const $rows = makeJsxRows(
      tab.lines,
      filterByVisibleScreen,
      dynamicReadOnly,
      editable,
      token,
      _id,
      baseApi,
      params,
      setSnackBarStatus,
      ValleList,
      $loading,
      tabErrorCount,
      tabIdentifier,
      values,
      cleanup,
    );

    const isVisibleTab = (visibleTab === index);
    const tabVisibility = isVisibleTab ? 'valleForm__tabs__tab--visible' : '';

  /**
   * Remvoe empty rows
   * 
   */

    const $filteresRows = $rows.filter(row => row !== null);

    return (
      <div
        key = { index }
        className = { `valleForm__tabs__tab ${tabVisibility}` }
      >
        {
          $filteresRows.length
            ? $filteresRows
            : <spam className = 'valleForm__empty-message'>Não há campos disponíveis.</spam>
        }
      </div>
    );

  });

  /**
   * Render ValleForm
   * 
   */

  const rowsDataDone = (tabs.length > 0);

  if (rowsDataDone) {

    return (
      <div className = "valleForm" id = { _id } >

        {/* ------- Header ------- */}

        <Switch
					label = "Limitar campos"
					readOnly = { dynamicReadOnly }
          onChange = { changeVisibleScreen }
          _id = { `${_id}-switch` }
        />

        {/* ------- Main ------- */}

        { !(tabs.length === 1) ? (
        
          <div className = "valleForm__tabs__titles">
            { $tabsTitles }
          </div>
        
        ) : null }

        { $tabs }

        {/* ------- Footer ------- */}

        <span className = "valleForm__sub">
          * Campos obrigatórios
        </span>

        { (Array.isArray(buttons) && buttons.length) ? (

          <valle-speed-dial
            id = "valleSpeedDial"
            class = "valleForm__speedDial"
            ref = { speedDial }
          >

            {
              makeSpeedDialActions({
                buttons: buttons,
                readOnly: dynamicReadOnly,
                editable: editable,
                baseApi: baseApi,
                canonicalApi: canonicalApi,
                params: params,
                _id: _id,
                feedbackCb: showFeedback,
                editCb: makeFieldsEditable,
                formCb: removeFieldsEditable,
                cancelCb: cancelFieldsEditable,
                newCB: makeFieldsDefault,
                token,
                getData,
                closeSpeedDial,
                updateValleList,
                tabErrorCount,
                setCleanup,
              })
            }

          </valle-speed-dial>

        ) : null }

      </div>
    );

  } else {

    return ( $loading );

  }
  
}

export default ValleForm;