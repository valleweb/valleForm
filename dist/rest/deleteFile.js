
Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * TODO: Add JSDocs
 *
 */

var deleteFile = function deleteFile(baseApi, token, params, id, pathValue, setSnackBarStatus, cleanUploadInput) {

  console.log('===========================');
  console.log('delete');
  console.log('===========================');

  var method = 'DELETE';

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

  console.log(baseApi);

  fetch(String(baseApi) + '/delete-file', { method: method, headers: headers, body: body }).then(function (res) {
    return res.json();
  }).then(function (data) {

    /**
    * Request success
    *
    */

    cleanUploadInput();

    if (setSnackBarStatus && data.evento.mensagem) {
      setSnackBarStatus({
        show: true,
        text: data.evento.mensagem,
        type: 'success'
      });
    }
  })['catch'](function (err) {

    /**
    * Request error
    *
    */

    console.log(err);

    if (setSnackBarStatus) {
      setSnackBarStatus({
        show: true,
        text: 'Erro ao tentar apagar arquivo',
        type: 'error'
      });
    }
  });
};

exports['default'] = deleteFile;