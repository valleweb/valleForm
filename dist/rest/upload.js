Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * TODO: Add JSDocs
 *
 */

var upload = function upload(hash, files, api, setPathValue, setUploadPercent, setUploadStatus) {

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