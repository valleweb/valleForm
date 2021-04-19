/**
 * TODO: Add JSDocs
 *
 */

const upload = (
  hash,
  files,
  api,
  setUploadPercent,
  setUploadStatus,
  setSnackBarStatus,
  inputRef,
  fileNameRef,
  setPathValue,
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
    setUploadStatus('start');

  });

  /**
   * Upload progress
   *
   */

  xhr.addEventListener('progress', e => {

    console.log('Upload: Progress');

    // let percentComplete = (e.loaded / e.total) * 100;
    setUploadStatus('progress');
    // setUploadPercent(percentComplete);

  });

  /**
   * Complete request
   *
   */

  xhr.addEventListener('load', () => {

    console.log('Upload: Complete');
    setUploadPercent(100);

    const response = JSON.parse(xhr.response);

    /**
     * Response error
     *
     */

    if (xhr.status !== 200) {

      console.log('Upload: Complete - error');
      setUploadStatus('error');
      setUploadPercent(0);

      if(response.evento.mensagem) {

        setSnackBarStatus({
          show: true,
          text: response.evento.mensagem,
          type: 'error',
        });

      }

      return;
    }

    /**
     * Response OK
     *
     */

    console.log('Upload: Complete - success');

    setUploadStatus('complete');

    inputRef.value = response.evento.caminho;
    fileNameRef.innerText = response.evento.caminho;
    setPathValue(response.evento.caminho);

  });

  /**
   * Request error
   *
   */

  xhr.addEventListener('error', e => {

    console.log('Upload: Error');
    setUploadStatus('error');
    console.log(e);

  });

  /**
   * Aborted request
   *
   */

  xhr.addEventListener('abort', e => {

    console.log('Upload: Abort');
    setUploadStatus('abort');
    console.log(e);

  });

  /**
   * Send request
   *
   */

  xhr.send(formData);

}

export default upload;
