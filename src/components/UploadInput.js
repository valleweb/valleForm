import React from 'react';

/**
 * TODO: Add JSDocs
 * 
 */

const UploadInput = () => {

  return (
    <div>

      <div>

        <input
          class = 'valleForm__upload-input'
          type = 'file'
        />

        <button>
          upload
        </button>

      </div>

      <div>
        <span> filename </span>
        <button> cancel </button>
        <span> progressbar </span>
      </div>

    </div>
  );

}

export default UploadInput;
