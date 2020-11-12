import React from 'react';
import makeDefaultsSpeedDialActions from './makeDefaultsSpeedDialActions';

export default ({
  buttons,
  readOnly,
  editable,
  baseApi,
  canonicalApi,
  params,
  _id,
  feedbackCb,
  editCb,
  formCb,
  cancelCb,
  newCB,
  token,
  getData,
  closeSpeedDial,
  updateValleList,
  tabErrorCount,
  setCleanup,
  speedDial,
  }) => {

  // --------------
  // Filter actions by status
  // --------------

  const $createActions = buttons
    .filter(button => button.status == "create")
    .map(button => makeDefaultsSpeedDialActions({
      button,
      baseApi,
      canonicalApi,
      params,
      feedbackCb,
      editCb,
      _id,
      cancelCb,
      formCb,
      newCB,
      token,
      getData,
      closeSpeedDial,
      updateValleList,
      tabErrorCount,
      setCleanup,
    }));

  const $retrievalActions = buttons
    .filter(button => button.status == "retrieval")
    .map(button => makeDefaultsSpeedDialActions({
      button,
      baseApi,
      canonicalApi,
      params,
      feedbackCb,
      editCb,
      _id,
      cancelCb,
      formCb,
      newCB,
      token,
      getData,
      closeSpeedDial,
      updateValleList,
      tabErrorCount,
    }));

  const $updateActions = buttons
    .filter(button => button.status == "update")
    .map(button => makeDefaultsSpeedDialActions({
      button,
      baseApi,
      canonicalApi,
      params,
      feedbackCb,
      editCb,
      _id,
      cancelCb,
      formCb,
      newCB,
      token,
      getData,
      closeSpeedDial,
      updateValleList,
      tabErrorCount,
    }));

  // --------------
  // Ceate a new register state
  // --------------

  if (!readOnly && !editable && $createActions.length) {
    return (

      <valle-speed-dial
        id = "valleSpeedDial"
        class = "valleForm__speedDial"
        ref = { speedDial }
      >

        <span className = "valleForm__speedDial__actions">
          { $createActions }
        </span>

      </valle-speed-dial>

    );
  }

  // --------------
  // Ready only state
  // --------------

  if (readOnly && !editable && $retrievalActions.length) {
    return (

      <valle-speed-dial
        id = "valleSpeedDial"
        class = "valleForm__speedDial"
        ref = { speedDial }
      >

      <span className = "valleForm__speedDial__actions">
        { $retrievalActions }
      </span>

      </valle-speed-dial>

    );
  }

  // --------------
  // Editable only state
  // --------------

  if(!readOnly && editable && $updateActions.length) {
    return (

      <valle-speed-dial
        id = "valleSpeedDial"
        class = "valleForm__speedDial"
        ref = { speedDial }
      >

      <span className = "valleForm__speedDial__actions">
        { $updateActions }
      </span>

      </valle-speed-dial>

    );
  }

}
