import React, { useState, useEffect } from 'react';

import makeJsxRows from './makeElements/makeJsxRows';
import makeSpeedDialActions from './makeElements/makeWebcomponents/makeSpeedDialActions';

import Snackbar from './components/Snackbar';
import Switch from './components/Switch';

import addFieldsValues from './fieldsControl/addFieldsValues';
import cleanFields from './fieldsControl/cleanFields';

/**
 * TODO: Add JSDocs
 * 
 */

const ValleForm = ({
  rows = [],
  _id,
  values = null,
  readOnly = false,
  baseApi,
  canonicalApi,
  params,
  $loading = 'loading',
  buttons = [] }) => {

  const [dynamicReadOnly, setDynamicReadOnly] = useState(false);
  const [editable, setEditable] = useState(false); // For makeSpeedDialActionsl use
  const [filterByVisibleScreen, setFilterByVisibleScreen] = useState(false);
  const [feedback, setFeedback] = useState({
    open: false,
    text: '',
    type: ''
  });

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
   * 
   * Control speed dial state
   */

	const valleSpeedDialRef = React.createRef();

	const colseValleSpeedDial = () => {
		const valleSpeedDial = valleSpeedDialRef.current;
		valleSpeedDial.open = false;
	}

  /**
   * Control fields states
   * 
   */

	const makeFieldsEditable = () => {
    setDynamicReadOnly(false);
		setEditable(true);
		colseValleSpeedDial();
  }
  
  const removeFieldsEditable = () => {
    setDynamicReadOnly(true);
		setEditable(false);
		colseValleSpeedDial();
  }
  
  const cancelFieldsEditable = () => {
		cleanFields();
    addFieldsValues(values);
    setDynamicReadOnly(true);
		setEditable(false);
		colseValleSpeedDial();
  }
  
  const makeFieldsDefault = () => {
    cleanFields();
    setDynamicReadOnly(false);
		setEditable(false);
		colseValleSpeedDial();
	}

  /**
   * Control feedbacks status
   * 
   */

  const showFeedback = (text, type) => {

    setFeedback({ open: false }) // Clear old feedback
		
		setTimeout(() => {
      setFeedback({
        open: true,
        text: text,
        type: type
      })
		}, 100); // Trick for second state change

		colseValleSpeedDial();

	}

  /**
   * Make rows
   * 
   */

  const $rows = makeJsxRows(rows, filterByVisibleScreen, dynamicReadOnly);

  /**
   * UI feedbacks
   * 
   */

  const $feedback = feedback.open ? <Snackbar report = { feedback.text } type = { feedback.type }/> : null;

  /**
   * Render ValleForm
   * 
   */

  const rowsDataDone = (rows.length > 0);

  if (rowsDataDone) {

    return (
      <div className = "valleForm">

        {/* ------- Header ------- */}

        <Switch
					label = "Limitar campos"
					readOnly = { dynamicReadOnly }
					onChange = { changeVisibleScreen }
        />

        {/* ------- Main ------- */}

        { $rows }

        {/* ------- Footer ------- */}

        <span className = "valleForm__sub">
          * Campos obrigatórios
        </span>

        <valle-speed-dial id = "valleSpeedDial" class = "valleForm__speedDial" ref = { valleSpeedDialRef } >

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
							newCB: makeFieldsDefault
            })
          }

        </valle-speed-dial>

        { $feedback }

      </div>
    );

  } else {

    return ( $loading );

  }
  
}

export default ValleForm;