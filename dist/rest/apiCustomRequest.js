Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getFieldsParams = require('../fieldsControl/getFieldsParams');

var _getFieldsParams2 = _interopRequireDefault(_getFieldsParams);

var _cleanFields = require('../fieldsControl/cleanFields');

var _cleanFields2 = _interopRequireDefault(_cleanFields);

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
      tabErrorCount = _ref.tabErrorCount,
      closeSpeedDial = _ref.closeSpeedDial,
      updateValleList = _ref.updateValleList,
      setCleanup = _ref.setCleanup,
      _ref$customParams = _ref.customParams,
      customParams = _ref$customParams === undefined ? {} : _ref$customParams;


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

    closeSpeedDial();

    /**
     * -----
     *
     */

    if (action == 'custom_api' || action == 'custom_stp') {

      fetch(String(baseApi) + '/generic-action', { method: method, headers: headers, body: body }).then(function (res) {
        return res.json();
      }).then(function (data) {

        /**
         * -----
         *
         */

        if (getData) {
          getData(data);
        }

        /**
         * -----
         *
         */

        if (data.evento.mensagem) {
          feedbackCb(data.evento.mensagem, 'success');
        }

        /**
         * -----
         *
         */

        (0, _cleanFields2['default'])(_id, setCleanup);

        /**
         * -----
         *
         */

        if (updateValleList.listData) {

          if (updateValleList.listData.list) {

            var columns = [];

            if (data.evento.id_tabela_filter) {

              console.log('Update vallelist with id_tabela');

              columns = [{
                id: "id_tabela",
                filter: {
                  tipo_1: "=",
                  valor_1: data.evento.id_tabela
                }
              }];
            } else if (updateValleList.listData.list.columns) {

              console.log('Update vallelist with filters');

              columns = updateValleList.listData.list.columns;
            } else {

              console.log('Update vallelist without id_tabela and filters');
            }

            updateValleList.getListFromAPI(customParams.id_usuario, token, customParams.identificador, customParams.cliente_id, customParams.empresa, customParams.estabelecimento, customParams.conexao, customParams.sistema, customParams.formulario, true, updateValleList.listData, updateValleList.setListData, null, 1, columns, fieldsParams, null, null);
          }
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