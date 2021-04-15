import React from 'react';
import apiCreate from '../../rest/apiCreate';
import apiUpdate from '../../rest/apiUpdate';
import apiDelete from '../../rest/apiDelete';
import apiReport from '../../rest/apiReport';
import apiEmail from '../../rest/apiEmail';
import apiCustomRequest from '../../rest/apiCustomRequest';
import shortid from 'shortid';

/**
 * TODO: Add JSDocs
 *
 */

export default makeDefaultsSpeedDialActions = ({
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
  getData = null,
  closeSpeedDial,
  updateValleList,
  tabErrorCount,
  setCleanup,
  setLoading,
}) => {

  /**
   * -----
   *
   */

  if(button.action == 'save') {
    return (
      <valle-speed-dial-action
        class = "valleForm__speedDial__save"
        key = { shortid.generate() }
        sloted
        label = { button.text }
        label-direction = "left"
        onClick = { () => {

          apiCreate(
            baseApi,
            canonicalApi,
            params,
            feedbackCb,
            token,
            _id,
            closeSpeedDial,
            updateValleList,
            tabErrorCount,
            setCleanup,
            setLoading,
          )

        } }>

        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
          <path fill="none" d="M0 0h24v24H0z"/>
          <path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z" fill="#fff"/>
        </svg>

      </valle-speed-dial-action>
    )
  }

  /**
   * -----
   *
   */

  if(button.action == 'edit') {
    return (
      <valle-speed-dial-action
        class = "valleForm__speedDial__edit"
        key = { shortid.generate() }
        sloted
        label = { button.text }
        label-direction = "left"
        onClick = { editCb }>

        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
          <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z" fill="#fff"/>
          <path d="M0 0h24v24H0z" fill="none"/>
        </svg>

      </valle-speed-dial-action>
    )
  }

  /**
   * -----
   *
   */

  if(button.action == 'update') {
    return (
      <valle-speed-dial-action
        class = "valleForm__speedDial__save"
        key = { shortid.generate() }
        sloted
        label = { button.text }
        label-direction = "left"
        onClick = { () => {

          apiUpdate(
            baseApi,
            canonicalApi,
            params,
            _id,
            feedbackCb,
            formCb,
            token,
            closeSpeedDial,
            updateValleList,
            tabErrorCount,
            setLoading,
          )

        } }>

        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
          <path fill="none" d="M0 0h24v24H0z"/>
          <path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z" fill="#fff"/>
        </svg>

      </valle-speed-dial-action>
    )
  }

  /**
   * -----
   *
   */

  if(button.action == 'cancel') {
    return (
      <valle-speed-dial-action
        class = "valleForm__speedDial__cancel"
        key = { shortid.generate() }
        sloted
        label = { button.text }
        label-direction = "left"
        onClick = { cancelCb }>

        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
          <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" fill="#fff"/>
          <path d="M0 0h24v24H0z" fill="none"/>
        </svg>

      </valle-speed-dial-action>
    )
  }

  /**
   * -----
   *
   */

  if(button.action == 'delete') {
    return (
      <valle-speed-dial-action
        class = "valleForm__speedDial__delete"
        key = { shortid.generate() }
        sloted
        label = { button.text }
        label-direction = "left"
        onClick = { () =>  {

          apiDelete(
            baseApi,
            canonicalApi,
            params,
            _id,
            feedbackCb,
            newCB,
            token,
            closeSpeedDial,
            updateValleList,
            setLoading,
          )

        } }>

        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
          <path fill="none" d="M0 0h24v24H0V0z"/>
          <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zm2.46-7.12l1.41-1.41L12 12.59l2.12-2.12 1.41 1.41L13.41 14l2.12 2.12-1.41 1.41L12 15.41l-2.12 2.12-1.41-1.41L10.59 14l-2.13-2.12zM15.5 4l-1-1h-5l-1 1H5v2h14V4z" fill="#fff"/>
          <path fill="none" d="M0 0h24v24H0z"/>
        </svg>

      </valle-speed-dial-action>
    )
  }

  /**
   * -----
   *
   */

  if(button.action == 'new') {
    return (
      <valle-speed-dial-action
        class = "valleForm__speedDial__new"
        key = { shortid.generate() }
        sloted
        label = { button.text }
        label-direction = "left"
        onClick = { newCB }>

          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
            <path fill="#fff" d="M24 10h-10v-10h-4v10h-10v4h10v10h4v-10h10z"/>
          </svg>

      </valle-speed-dial-action>
    )
  }

  /**
   * -----
   *
   */

   if(button.action == 'copy') {
    return (
      <valle-speed-dial-action
        class = "valleForm__speedDial__copy"
        key = { shortid.generate() }
        sloted
        label = { button.text }
        label-direction = "left"
        onClick = { copyCB }>

          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
            <path fill="#fff" d="M22 6v16h-16v-16h16zm2-2h-20v20h20v-20zm-24 17v-21h21v2h-19v19h-2zm18-8h-3v-3h-2v3h-3v2h3v3h2v-3h3v-2z"/>
          </svg>

      </valle-speed-dial-action>
    )
  }

  /**
   * -----
   *
   */

   if(button.action == 'report') {
    return (
      <valle-speed-dial-action
        class = ""
        key = { shortid.generate() }
        sloted
        label = { button.text }
        label-direction = "left"
        onClick = { () => {

          apiReport(
            baseApi,
            params,
            feedbackCb,
            token,
            closeSpeedDial,
            button.id,
            button.action,
            setLoading,
          )

        }}>

        <svg xmlns="http://www.w3.org/2000/svg" fill="#fff" width="19" height="19" viewBox="0 0 24 24">
          <path d="M22 13v-13h-20v24h8.409c4.857 0 3.335-8 3.335-8 3.009.745 8.256.419 8.256-3zm-4-7h-12v-1h12v1zm0 3h-12v-1h12v1zm0 3h-12v-1h12v1zm-2.091 6.223c2.047.478 4.805-.279 6.091-1.179-1.494 1.998-5.23 5.708-7.432 6.881 1.156-1.168 1.563-4.234 1.341-5.702z"/>
        </svg>

      </valle-speed-dial-action>
    )
  }

  /**
   * -----
   *
   */

   if(button.action == 'email_confirmation') {
    return (
      <valle-speed-dial-action
        class = "valleForm__speedDial__copy"
        key = { shortid.generate() }
        sloted
        label = { button.text }
        label-direction = "left"
        onClick = { () => {

          apiEmail(
            baseApi,
            _id,
            feedbackCb,
            token,
            closeSpeedDial,
            setLoading,
          )

        } }>

          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
            <path fill="#fff" d="M12 12.713l-11.985-9.713h23.97l-11.985 9.713zm0 2.574l-12-9.725v15.438h24v-15.438l-12 9.725z"/>
          </svg>

      </valle-speed-dial-action>
    )
  }

  /**
   * -----
   *
   */

  return (
    <valle-speed-dial-action
      class = ""
      key = { shortid.generate() }
      sloted
      label = { button.text }
      label-direction = "left"
      onClick = { () => {

        const requestParams = {
          getData,
          action: button.action,
          button_id: button.id,
          baseApi,
          params,
          token,
          _id,
          endpoint: button.endpoint,
          feedbackCb,
          tabErrorCount,
          closeSpeedDial,
          updateValleList,
          setCleanup,
          customParams: params,
          setLoading,
        }

        closeSpeedDial();
        apiCustomRequest(requestParams);

      }}>

        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
          <path fill="#fff" d="M8 10h-5l9-10 9 10h-5v10h-8v-10zm8 12h-8v2h8v-2z"/>
        </svg>

    </valle-speed-dial-action>
  )

}
