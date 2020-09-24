import React, { useState, useEffect } from 'react';

import makeJsxRows from './makeElements/makeJsxRows';
import makeSpeedDialActions from './makeElements/makeWebcomponents/makeSpeedDialActions';

import Switch from './components/Switch';

import addFieldsValues from './fieldsControl/addFieldsValues';
import cleanFields from './fieldsControl/cleanFields';

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
  }) => {

  const [dynamicReadOnly, setDynamicReadOnly] = useState(false);
  const [editable, setEditable] = useState(false); // For makeSpeedDialActionsl use
  const [filterByVisibleScreen, setFilterByVisibleScreen] = useState(false);
  const [visibleTab, setVisibleTab] = useState(0);

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
    speedDial.current.open = false;
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
    cleanFields(_id);
    setDynamicReadOnly(false);
		setEditable(false);
		closeSpeedDial();
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

    closeSpeedDial();

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

    return (
      <button
        key = { index }
        className = { `valleForm__tabs__title ${selectedTab}` }
        onClick = { () => showTab(index) }
      >
        { tab.title }
      </button>
    );

  });

  /**
   * Make Tabs
   * 
   */

  const $tabs = tabs.map((tab, index) => {

    const $rows = makeJsxRows(
      tab.lines,
      filterByVisibleScreen,
      dynamicReadOnly,
      editable,
      token,
      _id,
      baseApi,
      params,
    );

    const isVisibleTab = (visibleTab === index);
    const tabVisibility = isVisibleTab ? 'valleForm__tabs__tab--visible' : '';

    return (
      <div
        key = { index }
        className = { `valleForm__tabs__tab ${tabVisibility}` }
      >
        { $rows }
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
            })
          }

        </valle-speed-dial>

      </div>
    );

  } else {

    return ( $loading );

  }
  
}

export default ValleForm;