Object.defineProperty(exports, "__esModule", {
  value: true
});
var cleanUploadInput = function cleanUploadInput(formScope, dataset) {

  var fakeUploadInput = formScope.querySelector('#' + String(dataset.fakeUploadRef));
  var fileName = formScope.querySelector('#' + String(dataset.uploadFileNameRef));
  var download = formScope.querySelector('#' + String(dataset.download));

  fakeUploadInput.value = '';
  fileName.innerText = 'Ainda não há arquivo(s) no servidor';

  if (download) {
    download.disabled = true;
    download.dataset.pathTarget = '';
  }
};

exports['default'] = cleanUploadInput;