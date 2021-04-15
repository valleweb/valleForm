Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getFieldsParamsWithNoValidations = require('../fieldsControl/getFieldsParamsWithNoValidations');

var _getFieldsParamsWithNoValidations2 = _interopRequireDefault(_getFieldsParamsWithNoValidations);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

/**
 * TODO: Add JSDocs
 *
 */

var apiEmail = function apiEmail(baseApi, _id, feedbackCb, token, closeSpeedDial, setLoading) {

  /**
   * -----
   *
   */

  var fields = (0, _getFieldsParamsWithNoValidations2['default'])(_id);

  /**
   * -----
   *
   */

  var fieldsKeys = Object.keys(fields);
  var emailToArray = fieldsKeys.filter(function (fieldId) {
    return fieldId === 'email';
  });
  var emailTo = fields[emailToArray[0]].value;

  /**
   * -----
   *
   */

  if (!emailTo) {
    feedbackCb('Campo e-mail não encontrado ou não preenchido', 'error');
    return;
  }

  /**
   * API url
   *
   */

  var apiPath = String(baseApi) + '/send-confirmation-email';

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
    evento: {
      email_to: emailTo
    }
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

exports['default'] = apiEmail;