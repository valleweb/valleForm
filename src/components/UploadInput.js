import React, { useState, useEffect } from 'react';
import getHash from '../rest/getHash';
import upload from '../rest/upload';
import download from '../rest/download';
import deleteFile from '../rest/deleteFile';
import normalizeProp from '../helpers/normalizeProp';

/**
 * TODO: Add JSDocs
 * TODO: Allow external svg icons.
 *
 */

const UploadInput = ({
  field,
  readOnly,
  editable,
  token,
  _id,
  baseApi,
  params,
  setSnackBarStatus,
  $loading,
  tabErrorCountControls,
  tabIdentifier,
  apiUpload,
}) => {

  /**
   * -----
   *
   */

  const [pathValue, setPathValue] = useState('');
  const [uploadStatus, setUploadStatus] = useState('awaiting-file');
  const [uploadPercent, setUploadPercent] = useState(0);
  const [URLStorage, setURLStorage] = useState('');
  const [downloadButtonRef, setDownloadButtonRef] = useState('');

  /**
   * Control readOnly sate in editable mode.
   *
   */

  let isDisabled;

  if(editable) {
    isDisabled = readOnly ? true : field.is_PK;
  } else {
    isDisabled = readOnly;
  }

  console.log('UPLOAD')
  console.log(readOnly)

  /**
   * -----
   *
   */

  useEffect(() => {

    if(readOnly) {
      setUploadStatus('awaiting-file')
      setUploadPercent(0)
      setPathValue('')
    }

  }, [readOnly])

  /**
   * -----
   *
   */

  useEffect(() => {

    const buttonDownload = document.getElementById(`${_id}-${field.id}-download`);

    if(buttonDownload) {
      buttonDownload.disabled = true;
      setDownloadButtonRef(buttonDownload)
    }

  }, [])

  /**
   * -----
   *
   */

  useEffect(() => {

    if(uploadStatus === 'complete') {
      downloadButtonRef.disabled = false;
    }

  }, [uploadStatus])

  /**
   * -----
   *
   */

  const uploadInput = React.createRef();
  const uploadHiddenInput = React.createRef();
  const fileName = React.createRef();

  /**
   * -----
   *
   */

  const startUpload = () => {

    /**
     * -----
     *
     */

    const currentInput = uploadInput.current;

    /**
     * -----
     *
     */

    getHash(token, params, field.id, apiUpload.request)
      .then(data => {

        /**
         * -----
         *
         */

        upload(
          data.evento.hash,
          currentInput.files,
          apiUpload.upload,
          setUploadPercent,
          setUploadStatus,
          setSnackBarStatus,
          uploadHiddenInput.current,
          fileName.current,
          setPathValue,
        );

        /**
         * -----
         *
         */

        setURLStorage(data.evento.URL_storage);

      })
      .catch(error => {

        /**
         * -----
         *
         */

        console.log(error);

      });

  }

  /**
   * -----
   *
   */

  const handleUploadInput = e => {

    e.target.value
      ? setUploadStatus('pre-upload')
      : setUploadStatus('awaiting-file');

    setUploadPercent(0);

  }

  /**
   * -----
   *
   */

  const backToCompleteUploadState = () => {

    setUploadStatus('complete');
    setUploadPercent(100);
    cleanVisualUploadInput();

  }

  /**
   * -----
   *
   */

  const cleanUploadInput = () => {

    setUploadStatus('awaiting-file')
    setUploadPercent(0)
    setPathValue('')

    const fakeUploadInput = document.querySelector(`#${_id}-${field.id}-upload`);
    const fileName = document.querySelector(`#${_id}-${field.id}-file-name`);
    const download = document.querySelector(`#${_id}-${field.id}-download`);

    fakeUploadInput.value = '';
    fileName.innerText = 'Ainda não há arquivo(s) no servidor';

    download.disabled = true;
    download.dataset.pathTarget = ''

  }

  /**
   * -----
   *
   */

  const cleanVisualUploadInput = () => {

    const currentInput = uploadInput.current;
    currentInput.value = '';

  }

  /**
   * -----
   *
   */

  const disableUploadButtons = (uploadStatus === 'awaiting-file') || (uploadStatus === 'progress') || (uploadStatus === 'start');

  // console.log('UPLOAD ================')
  // console.log('Readonly: ' + readOnly)
  // console.log('editable: ' + editable)
  // console.log('baseApi: ' + baseApi)
  // console.log('_id: ' + _id)
  // console.log(field)
  // console.log('Caminho: ' + '')
  // console.log('pathValue: ' + pathValue)
  // console.log('================')

  return (
    <div className = {`valleForm__upload ${isDisabled ? 'valleForm__upload--disabled' : ''}`}>

      <div className = 'valleForm__upload__select-file'>

        {/**
         * Upload input.
         *
         */}

        <input
          className = 'valleForm__upload__input'
          type = 'file'
          type = { field.type }
          placeholder = { field.placeholder }
          ref = { uploadInput }
          onChange = { handleUploadInput }
          { ...normalizeProp('multiple', field.upload.multiple) }
          disabled = { (uploadStatus === 'progress') || (uploadStatus === 'start') || isDisabled }
          id = { `${_id}-${field.id}-upload` }
        />

        <label className = 'valleForm__upload__label'>
          { field.label }
        </label>

        <input
          className = 'visual-hidden'
          data-valle-field = { field.id }
          id = { field.id }
          data-tabidentifier = { tabIdentifier }
          data-fake-upload-ref = { `${_id}-${field.id}-upload` }
          data-upload-file-name-ref = { `${_id}-${field.id}-file-name` }
          data-download = { `${_id}-${field.id}-download` }
          ref = { uploadHiddenInput }
        />

        {/**
         * Buttons for upload and update.
         * Available after file selection.
         *
         */}

        { uploadStatus !== 'complete' && !readOnly ? (

          pathValue && !readOnly ? ( // Selected file for the second time

            /**
             * Update file.
             * Available on the update file state.
             *
             */

            <span class="valleForm__upload__buttons-container">

              <button
                onClick = { startUpload }
                disabled = { disableUploadButtons }
                className = 'valleForm__upload__button valleForm__upload__button--edit'
              >

                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='24'
                  height='24'
                  viewBox='0 0 24 24'
                >
                  <path d='M8 10h-5l9-10 9 10h-5v10h-8v-10zm11 9v3h-14v-3h-2v5h18v-5h-2z'/>
                </svg>

                Atualizar

              </button>

              {/**
                * Button for cancel de update state.
                * Available on the first upload file state.
                *
                */}

              <button
                onClick = { backToCompleteUploadState }
                disabled = { disableUploadButtons }
                className = 'valleForm__upload__button valleForm__upload__button--cancel'
              >

                <svg
                  xmlns = 'http://www.w3.org/2000/svg'
                  width = '24'
                  height = '24'
                  viewBox = '0 0 24 24'
                  className = 'valleForm__upload__button__icon'
                >
                  <path d = 'M23 20.168l-8.185-8.187 8.185-8.174-2.832-2.807-8.182 8.179-8.176-8.179-2.81 2.81 8.186 8.196-8.186 8.184 2.81 2.81 8.203-8.192 8.18 8.192z'/>
                </svg>

                  Cancelar

              </button>

            </span>

          ) : (

            /**
             * Upload file.
             * Available on the first upload file state.
             *
             */

            ( !disableUploadButtons ? (
              <button
                onClick = { startUpload }
                // disabled = { disableUploadButtons }
                className = 'valleForm__upload__button valleForm__upload__button--add'
              >

                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='24'
                  height='24'
                  viewBox='0 0 24 24'
                >
                  <path d='M8 10h-5l9-10 9 10h-5v10h-8v-10zm11 9v3h-14v-3h-2v5h18v-5h-2z'/>
                </svg>

                Upload

              </button>
            ) : null )

          )

        ) : null }

      </div>

      {/**
        * Progress bar.
        * Available during the upload process.
        *
        * TODO: Refactor and create an isolated component.
        *
        */}

      { (uploadStatus !== 'awaiting-file') ? (

        <div className = 'valleForm__upload__progress'>

          { uploadStatus === 'error' ? (

            /**
             * Progress bar error.
             *
             */

            <div className = 'valleForm__upload__progress__bar valleForm__upload__progress__error' >
              <span className = 'valleForm__upload__progress__percent'>
                Falha no upload
              </span>
            </div>

          ) : (

            /**
             * Progress bar percent animation.
             *
             */

            <div
              className = 'valleForm__upload__progress__bar'
              style = {{ '--progress': `${uploadPercent}%`}}
            >

              <span className = 'valleForm__upload__progress__percent'>
                { `${uploadPercent}%` }
              </span>

            </div>

          ) }

          {/**
            * Button for abort the upload process.
            *
            */}

          { uploadStatus === 'progress' && !readOnly ? (

            <button className = 'valleForm__upload__button valleForm__upload__button--cancel'>
              Cancelar
            </button>

          ) : null }

        </div>

      ) : null }

      {/**
        * File infos and controllers.
        *
        * TODO: Refactor and create a helper for get the file name.
        *
        */}

      <div  className = 'valleForm__upload__file-infos'>

        <div ref = { fileName } className = 'valleForm__upload__file-name' id = { `${_id}-${field.id}-file-name` }>
          {/* {
            pathValue
              ? 'Arquivo(s) no servidor: ' + pathValue.split('/')[pathValue.split('/').length - 1]
              : 'Ainda não há arquivo(s) no servidor'
          } */}
          Ainda não há arquivo(s) no servidor
        </div>

        {/**
          * Button for delete file.
          *
          */}

        { uploadStatus === 'complete' ? (

          <button
            className = 'valleForm__upload__button valleForm__upload__button--cancel'
            onClick = { () => deleteFile(baseApi, token, params, field.id, pathValue, setSnackBarStatus, cleanUploadInput) }
          >

            <svg
              xmlns = 'http://www.w3.org/2000/svg'
              width = '24'
              height = '24'
              viewBox = '0 0 24 24'
            >
              <path fill = 'none' d = 'M0 0h24v24H0V0z'/>
              <path d = 'M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zm2.46-7.12l1.41-1.41L12 12.59l2.12-2.12 1.41 1.41L13.41 14l2.12 2.12-1.41 1.41L12 15.41l-2.12 2.12-1.41-1.41L10.59 14l-2.13-2.12zM15.5 4l-1-1h-5l-1 1H5v2h14V4z' fill='#fff'/>
              <path fill = 'none' d = 'M0 0h24v24H0z'/>
            </svg>

            Excluir

          </button>

        ) : null }

        {/**
          * Button for download file.
          *
          */}

        {/* { (uploadStatus === 'complete') || readOnly ? ( */}

          <button
            id = { `${_id}-${field.id}-download` }
            className = 'valleForm__upload__button'
            onClick = { (event) => download(baseApi, token, params, field.id, pathValue, event) }
          >

            <svg
              xmlns = 'http://www.w3.org/2000/svg'
              width = '24'
              height = '24'
              viewBox = '0 0 24 24'
            >
              <path d = 'M12 21l-8-9h6v-12h4v12h6l-8 9zm9-1v2h-18v-2h-2v4h22v-4h-2z'/>
            </svg>

            Baixar

          </button>

        {/* ) : null } */}

      </div>

      {/**
        * Upload input descriptions.
        *
        */}

      <span className = 'valleForm__upload__helper-text'>
        { field.helper_text }
      </span>

      <span className = 'valleForm__upload__error-text'>
        { field.error_text }
      </span>

    </div>
  );

}

export default UploadInput;
