import React from 'react';
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

        upload(data.evento.hash, currentInput.files, apiUpload.upload)
          .then(data => {
            console.log(data);
          })
          .catch(error => {
            console.log(error);
          });

      })
      .catch(error => {
        console.log(error);
      });

  }

  return (
    <div>

      <div>

        <label> { field.label } </label>

        <input
          class = 'valleForm__upload-input'
          type = 'file'
          value = { field.value ? field.value : null }
          type = { field.type }
          placeholder = { field.placeholder }
          data-valle-field = { field.id }
          ref = { uploadInput }
          id = { field.id }
          data-tabidentifier = { tabIdentifier }
          { ...normalizeProp('multiple', field.upload.multiple) }
        />

        <button onClick = { startUpload }>
          upload
        </button>

      </div>

      <div>
        <span> progressbar </span>
        <button> cancel </button>
      </div>

      <span> { field.helper_text } </span>
      <span> { field.error_text } </span>

    </div>
  );

}

export default UploadInput;
