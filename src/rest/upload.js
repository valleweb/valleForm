/**
 * TODO: Add JSDocs
 *
 */

const upload = (
  hash,
  files,
  api,
  setPathValue,
  setUploadPercent,
) => {

  /**
   * Files data structure.
   *
   */

  const formData = new FormData();

  Array.from(files).forEach(file => {
    formData.append(file.name, file);
  });

  /**
   * Ajax configs
   *
   */

  const xhr = new XMLHttpRequest();

  xhr.open('post', api, true);
  xhr.setRequestHeader('hash', hash);

  /**
   * Start request
   *
   */

  xhr.upload.addEventListener('loadstart', e => {

    console.log('Upload: Start');

  });

  /**
   * Upload progress
   *
   */

  xhr.addEventListener('progress', e => {

    console.log('Upload: Progress');

    let percentComplete = (e.loaded / e.total) * 100;
    setUploadPercent(percentComplete);

  });

  /**
   * Complete request
   *
   */

  xhr.addEventListener('load', () => {

    console.log('Upload: Complete');

    const response = JSON.parse(xhr.response);
    setPathValue(response.evento.caminho);

  });

  /**
   * Request error
   *
   */

  xhr.addEventListener('error', e => {

    console.log('Upload: Error');
    console.log(e);

  });

  /**
   * Aborted request
   *
   */

  xhr.addEventListener('abort', e => {

    console.log('Upload: Abort');
    console.log(e);

  });

  /**
   * Send request
   *
   */

  xhr.send(formData);

}

export default upload;
