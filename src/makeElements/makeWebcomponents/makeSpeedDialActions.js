import React, { useState } from 'react';
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
  copyCB,
  token,
  getData,
  closeSpeedDial,
  updateValleList,
  tabErrorCount,
  setCleanup,
  speedDial,
}) => {

  // --------------
  // Loading status
  // --------------

  const [loading, setLoading] = useState(false);

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
      copyCB,
      token,
      getData,
      closeSpeedDial,
      updateValleList,
      tabErrorCount,
      setCleanup,
      setLoading,
      shouldClean: true,
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
      copyCB,
      token,
      getData,
      closeSpeedDial,
      updateValleList,
      tabErrorCount,
      setLoading,
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
      copyCB,
      token,
      getData,
      closeSpeedDial,
      updateValleList,
      tabErrorCount,
      setLoading,
    }));

  // --------------
  // Create a new register state
  // --------------

  if(loading) {
    return (

      <valle-fab
        sloted
        disabled = "true"
        class = "valleForm__speedDial valleForm__speedDial--loading"
      >

        <div class="valleForm__speedDial__loader" title="0">
          <svg version="1.1" xmlns="http://www.w3.org/2000/svg"  x="0px" y="0px" width="50px" height="50px" viewBox="0 0 40 37" enable-background="new 0 0 30 30">
            <title> Carregando </title>
            <path opacity="0.2" fill="#000" d="M20.201,5.169c-8.254,0-14.946,6.692-14.946,14.946c0,8.255,6.692,14.946,14.946,14.946
              s14.946-6.691,14.946-14.946C35.146,11.861,28.455,5.169,20.201,5.169z M20.201,31.749c-6.425,0-11.634-5.208-11.634-11.634
              c0-6.425,5.209-11.634,11.634-11.634c6.425,0,11.633,5.209,11.633,11.634C31.834,26.541,26.626,31.749,20.201,31.749z"/>
            <path fill="#000" d="M26.013,10.047l1.654-2.866c-2.198-1.272-4.743-2.012-7.466-2.012h0v3.312h0
              C22.32,8.481,24.301,9.057,26.013,10.047z">
                <animateTransform attributeType="xml"
                  attributeName="transform"
                  type="rotate"
                  from="0 20 20"
                  to="360 20 20"
                  dur="0.8s"
                  repeatCount="indefinite"/>
            </path>
          </svg>
        </div>

      </valle-fab>

    )
  }

  // --------------
  // Create a new register state
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
