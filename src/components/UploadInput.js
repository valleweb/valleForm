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
    <div>

      <label> { field.label } </label>

      <div>

        <input
          className = 'valleForm__upload-input'
          type = 'file'
          type = { field.type }
          placeholder = { field.placeholder }
          ref = { uploadInput }
          onChange = { handleUploadInput }
          { ...normalizeProp('multiple', field.upload.multiple) }
          disabled = { (uploadStatus === 'progress') || (uploadStatus === 'start') }
        />

        { uploadStatus !== 'complete' ? (

          <button
            onClick = { startUpload }
            disabled = { (uploadStatus === 'awaiting-file') || (uploadStatus === 'progress') || (uploadStatus === 'start')}
          >

            {
              (uploadStatus === 'pre-upload' && uploadPercent === 100)
                ? 'atualizar arquivo'
                : 'upload'
            }

          </button>

        ) : null }


        { uploadStatus === 'pre-upload' && uploadPercent === 100 ? (

          <button onClick = { backToCompleteUploadState }>
            calcelar
          </button>

        ) : null }

      </div>

      <div>

        Caminho:

        <input
          className = 'valleForm__upload-input'
          value = { pathValue }
          data-valle-field = { field.id }
          id = { field.id }
          data-tabidentifier = { tabIdentifier }
        />

      </div>

      { uploadStatus !== 'awaiting-file' ? (

        <div>

          Progresso: { `${uploadPercent}%` }

          { uploadStatus === 'progress' ? (

            <button>
              cancelar
            </button>

          ) : null }

        </div>

      ) : null }

      { pathValue ? pathValue : null }

      { uploadStatus === 'complete' ? (

        <button>
          excluir
        </button>

      ) : null }

      { uploadStatus === 'complete' ? (

        <a href = {`${URLStorage}${pathValue}`}>
          Download
        </a>

      ) : null }

      <span> { field.helper_text } </span>
      <span> { field.error_text } </span>

    </div>
  );

}

export default UploadInput;
