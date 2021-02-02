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
  const [uploadPercent, setUploadPercent] = useState(0);

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
        );

      })
      .catch(error => {
        console.log(error);
      });

  }

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
          { ...normalizeProp('multiple', field.upload.multiple) }
        />

        <button onClick = { startUpload }>
          upload
        </button>

        <button>
          cancel
        </button>

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

      <div>
        Progresso: { `${uploadPercent}%` }
      </div>

      <span> { field.helper_text } </span>
      <span> { field.error_text } </span>

    </div>
  );

}

export default UploadInput;
