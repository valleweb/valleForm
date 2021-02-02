import React, { useState } from 'react';
import getHash from '../rest/getHash';
import upload from '../rest/upload';
import normalizeProp from '../helpers/normalizeProp';

/**
 * TODO: Add JSDocs
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

  /**
   * -----
   *
   */

  const uploadInput = React.createRef();

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
          setPathValue,
          setUploadPercent,
          setUploadStatus,
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
      : setUploadStatus('awaiting-file')

  }

  /**
   * -----
   *
   */

  const backToCompleteUploadState = () => {

    setUploadStatus('complete');
    cleanVisualUploadInput();

  }

  /**
   * -----
   *
   */

  const cleanUploadInput = () => {
    // Delete file callback
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

  return (
    <div className = 'valleForm__upload'>

      <div className = 'valleForm__upload__select-file'>

        <input
          className = 'valleForm__upload__input'
          type = 'file'
          type = { field.type }
          placeholder = { field.placeholder }
          ref = { uploadInput }
          onChange = { handleUploadInput }
          { ...normalizeProp('multiple', field.upload.multiple) }
          disabled = { (uploadStatus === 'progress') || (uploadStatus === 'start') }
        />

        <label className = 'valleForm__upload__label'> { field.label } </label>

        { uploadStatus !== 'complete' ? (

          <button
            onClick = { startUpload }
            disabled = { (uploadStatus === 'awaiting-file') || (uploadStatus === 'progress') || (uploadStatus === 'start')}
            className = 'valleForm__upload__button valleForm__upload__button--add'
          >

            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8 10h-5l9-10 9 10h-5v10h-8v-10zm11 9v3h-14v-3h-2v5h18v-5h-2z"/></svg>

            {
              (uploadStatus === 'pre-upload' && uploadPercent === 100)
                ? 'atualizar arquivo'
                : 'upload'
            }

          </button>

        ) : null }


        { uploadStatus === 'pre-upload' && uploadPercent === 100 ? (

          <button
            onClick = { backToCompleteUploadState }
            className = 'valleForm__upload__button valleForm__upload__button--cancel'
          >

            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
              <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" fill="#fff"/>
              <path d="M0 0h24v24H0z" fill="none"/>
            </svg>

            Cancelar

          </button>

        ) : null }

      </div>

        <input
          className = 'visual-hidden'
          value = { pathValue }
          data-valle-field = { field.id }
          id = { field.id }
          data-tabidentifier = { tabIdentifier }
        />

      { uploadStatus !== 'awaiting-file' ? (

        <div className = 'valleForm__upload__progress'>

          <div className = 'valleForm__upload__progress__bar' style = {{ '--progress': `${uploadPercent}%`}}>
            <span className = 'valleForm__upload__progress__percent'>{ `${uploadPercent}%` }</span>
          </div>

          { uploadStatus === 'progress' ? (

            <button className = 'valleForm__upload__button valleForm__upload__button--cancel'>
              cancelar
            </button>

          ) : null }

        </div>

      ) : null }

      <div  className = 'valleForm__upload__file-infos'>

        <div className = 'valleForm__upload__file-name'>
          { pathValue ? pathValue : null }
        </div>

        { uploadStatus === 'complete' ? (

          <button className = 'valleForm__upload__button valleForm__upload__button--cancel'>

            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
              <path fill="none" d="M0 0h24v24H0V0z"/>
              <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zm2.46-7.12l1.41-1.41L12 12.59l2.12-2.12 1.41 1.41L13.41 14l2.12 2.12-1.41 1.41L12 15.41l-2.12 2.12-1.41-1.41L10.59 14l-2.13-2.12zM15.5 4l-1-1h-5l-1 1H5v2h14V4z" fill="#fff"/>
              <path fill="none" d="M0 0h24v24H0z"/>
            </svg>

            Excluir

          </button>

        ) : null }

        { uploadStatus === 'complete' ? (

          <a
            href = {`${URLStorage}${pathValue}`}
            className = 'valleForm__upload__button'
          >

            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 21l-8-9h6v-12h4v12h6l-8 9zm9-1v2h-18v-2h-2v4h22v-4h-2z"/></svg>

            Baixar

          </a>

        ) : null }

      </div>

      <span className = 'valleForm__upload__helper-text'> { field.helper_text } </span>
      <span className = 'valleForm__upload__error-text'> { field.error_text } </span>

    </div>
  );

}

export default UploadInput;
