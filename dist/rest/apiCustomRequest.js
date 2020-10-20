Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getFieldsParams = require('../fieldsControl/getFieldsParams');

var _getFieldsParams2 = _interopRequireDefault(_getFieldsParams);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var apiCustomRequest = function apiCustomRequest(_ref) {
  var getData = _ref.getData,
      action = _ref.action,
      button_id = _ref.button_id,
      baseApi = _ref.baseApi,
      params = _ref.params,
      token = _ref.token,
      _id = _ref._id,
      _ref$endpoint = _ref.endpoint,
      endpoint = _ref$endpoint === undefined ? '' : _ref$endpoint,
      feedbackCb = _ref.feedbackCb,
      tabErrorCount = _ref.tabErrorCount;


  var fieldsParams = (0, _getFieldsParams2['default'])(_id, tabErrorCount);

  if (fieldsParams) {

    var method = 'POST';

    var headers = new Headers({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + String(token)
    });

    var body = JSON.stringify({
      evento: {
        id_usuario: params.id_usuario,
        token: token,
        identificador: params.identificador,
        cliente_id: params.cliente_id,
        empresa: params.empresa,
        estabelecimento: params.estabelecimento,
        conexao: params.conexao,
        sistema: params.sistema,
        formulario: params.formulario,
        location: "",
        action: action,
        button_id: button_id,
        dados: fieldsParams,
        endpoint: endpoint
      }

    });

    /**
     * -----
     * 
     */

    if (action == 'custom_api' || action == 'custom_stp') {

      fetch(String(baseApi) + '/generic-action', { method: method, headers: headers, body: body }).then(function (res) {
        return res.json();
      }).then(function (data) {

        if (getData) {
          getData(data);
        }

        if (data.evento.mensagem) {
          feedbackCb(data.evento.mensagem, 'success');
        }
      })['catch'](function () {

        /**
         * Request error
         * 
         */

        feedbackCb('Erro interno no servidor', 'error');
      });;
    } else {

      fetch(String(baseApi) + '/form-filter', { method: method, headers: headers, body: body }).then(function (res) {
        return res.json();
      }).then(function (data) {

        if (getData) {
          getData(data);
        }

        if (data.evento.mensagem) {
          feedbackCb(data.evento.mensagem, 'success');
        }
      })['catch'](function () {

        /**
         * Request error
         * 
         */

        feedbackCb('Erro interno no servidor', 'error');
      });
    }
  } else {

    /**
     * Form error
     * 
     */

    feedbackCb('Erro ao preencher o formulário', 'error');
  }
};

exports['default'] = apiCustomRequest;