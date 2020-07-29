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
    }));

  // --------------
  // Ceate a new register state
  // --------------

  if (!readOnly && !editable) {
    return (
      <span className = "valleForm__speedDial__actions">
        { $createActions }
      </span>
    );
  }

  // --------------
  // Ready only state
  // --------------

  if (readOnly && !editable) {
    return (
      <span className = "valleForm__speedDial__actions">
        { $retrievalActions }
      </span>
    );
  }

  // --------------
  // Editable only state
  // --------------

  if(!readOnly && editable) {
    return (
      <span className = "valleForm__speedDial__actions">
        { $updateActions }
      </span>
    );
  }

}
