Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * TODO: Add JSDocs
 *
 */

var upload = function upload(hash, files, api, setPathValue, setUploadPercent, setUploadStatus, setSnackBarStatus) {

  /**
   * Files data structure.
   *
   */

  var formData = new FormData();

  Array.from(files).forEach(function (file) {
    formData.append(file.name, file);
  });

  /**
   * Ajax configs
   *
   */

  var xhr = new XMLHttpRequest();

  xhr.open('post', api, true);
  xhr.setRequestHeader('hash', hash);

  /**
   * Start request
   *
   */

  xhr.upload.addEventListener('loadstart', function (e) {

    console.log('Upload: Start');
    setUploadStatus('start');
  });

  /**
   * Upload progress
   *
   */

  xhr.addEventListener('progress', function (e) {

    console.log('Upload: Progress');

    var percentComplete = e.loaded / e.total * 100;
    setUploadStatus('progress');
    setUploadPercent(percentComplete);
  });

  /**
   * Complete request
   *
   */

  xhr.addEventListener('load', function () {

    console.log('Upload: Complete');

    var response = JSON.parse(xhr.response);

    /**
     * Response error
     *
     */

    if (xhr.status !== 200) {

      console.log('Upload: Complete - error');
      setUploadStatus('error');
      setUploadPercent(0);

      if (response.evento.mensagem) {

        setSnackBarStatus({
          show: true,
          text: response.evento.mensagem,
          type: 'error'
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
    setPathValue(response.evento.caminho);
  });

  /**
   * Request error
   *
   */

  xhr.addEventListener('error', function (e) {

    console.log('Upload: Error');
    setUploadStatus('error');
    console.log(e);
  });

  /**
   * Aborted request
   *
   */

  xhr.addEventListener('abort', function (e) {

    console.log('Upload: Abort');
    setUploadStatus('abort');
    console.log(e);
  });

  /**
   * Send request
   *
   */

  xhr.send(formData);
};

exports['default'] = upload;