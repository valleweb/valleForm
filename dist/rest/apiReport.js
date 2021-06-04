
Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * TODO: Add JSDocs
 *
 */

var apiReport = function apiReport(baseApi) {
  var customParams = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var feedbackCb = arguments[2];
  var token = arguments[3];
  var closeSpeedDial = arguments[4];
  var button_id = arguments[5];
  var action = arguments[6];
  var setLoading = arguments[7];


  /**
   * API url
   *
   */

  var apiPath = String(baseApi) + '/list-reports';

  /**
   * Request configs
   *
   */

  var method = 'POST';

  var headers = new Headers({
    'Content-Type': 'application/json',
    'Authorization': 'Bearer ' + String(token)
  });

  /**
   * Request data structure
   *
   */

  var body = JSON.stringify({
    evento: Object.assign({}, customParams, {
      button_id: button_id,
      action: action
    })
  });

  /**
   * -----
   *
   */

  closeSpeedDial();

  /**
   * -----
   *
   */

  setLoading(true);

  /**
   * HTTP POST
   *
   */

  fetch(apiPath, { method: method, headers: headers, body: body }).then(function (res) {
    return res.json();
  }).then(function (data) {

    /**
     * Request success
     *
     */

    setLoading(false);

    feedbackCb(data.evento.mensagem, 'success');
  })['catch'](function (err) {

    /**
     * Request error
     *
     */

    setLoading(false);

    feedbackCb('Erro interno no servidor', 'error');
  });
};

exports['default'] = apiReport;