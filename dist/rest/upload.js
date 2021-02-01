Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * TODO: Add JSDocs
 *
 */

var upload = function upload(hash, files, api) {

  /**
   * HTTP POST
   *
   */

  var method = 'POST';

  var headers = new Headers({
    'hash': hash
  });

  /**
   * Request data structure
   *
   */

  var formData = new FormData();

  Array.from(files).forEach(function (file) {
    formData.append(file.name, file);
  });

  /**
   * HTTP POST
   *
   */

  return fetch(api, { method: method, headers: headers, body: formData }).then(function (res) {
    return res.json();
  });
};

exports['default'] = upload;