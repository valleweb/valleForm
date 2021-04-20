Object.defineProperty(exports, "__esModule", {
  value: true
});

var _fileSaver = require('file-saver');

var _fileSaver2 = _interopRequireDefault(_fileSaver);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

/**
 * TODO: Add JSDocs
 *
 */

var download = function download(baseApi, token, params, id, pathValue, event) {

  console.log('===========================');
  console.log('download');
  console.log('===========================');

  if (!pathValue) {
    pathValue = event.target.dataset.pathTarget;
  }

  var method = 'POST';

  var headers = new Headers({
    'Content-Type': 'application/json',
    'Authorization': 'Bearer ' + String(token)
  });

  var body = JSON.stringify({
    evento: Object.assign({}, params, {
      campo: id,
      caminho: pathValue
    })
  });

  /**
   * HTTP POST
   *
   */

  fetch(String(baseApi) + '/download', { method: method, headers: headers, body: body }).then(function (res) {
    return res.json();
  }).then(function (data) {

    /**
    * Request success
    *
    */

    var newBlob = new Blob([data], { type: 'octet/stream' });

    _fileSaver2['default'].saveAs(newBlob, 'download.zip');
  })['catch'](function (err) {

    /**
    * Request error
    *
    */

    console.log(err);

    // feedbackCb('Erro interno no servidor', 'error');
  });
};

exports['default'] = download;