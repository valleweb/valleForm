
Object.defineProperty(exports, "__esModule", {
  value: true
});

var _formatFilename = require('../helpers/formatFilename');

var _formatFilename2 = _interopRequireDefault(_formatFilename);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var populateUploadInput = function populateUploadInput(formScope, dataset, fileNameText) {

  var fileName = formScope.querySelector('#' + String(dataset.uploadFileNameRef));
  var download = formScope.querySelector('#' + String(dataset.download));

  fileName.innerText = (0, _formatFilename2['default'])(fileNameText);

  if (fileNameText && download) {
    download.disabled = false;
    download.dataset.pathTarget = fileNameText;
  }
};

exports['default'] = populateUploadInput;