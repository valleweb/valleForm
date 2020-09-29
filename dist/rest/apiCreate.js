Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getFieldsParams = require('../fieldsControl/getFieldsParams');

var _getFieldsParams2 = _interopRequireDefault(_getFieldsParams);

var _cleanFields = require('../fieldsControl/cleanFields');

var _cleanFields2 = _interopRequireDefault(_cleanFields);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

/**
 * TODO: Add JSDocs
 * 
 */

var apiCreate = function apiCreate(baseApi, canonicalApi) {
  var customParams = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  var feedbackCb = arguments[3];
  var token = arguments[4];
  var _id = arguments[5];
  var closeSpeedDial = arguments[6];
  var updateValleList = arguments[7];


  /**
   * Get all form values
   * 
   */

  var fieldsParams = (0, _getFieldsParams2['default'])(_id);

  if (fieldsParams) {

    /**
     * API url
     * 
     */

    var apiPath = '' + String(baseApi) + String(canonicalApi);

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
     * Resquest data structure
     * 
     */

    var body = JSON.stringify({
      evento: Object.assign({}, customParams, {
        dados: fieldsParams
      })
    });

    /**
     * HTTP POST
     * 
     */

    closeSpeedDial();

    fetch(apiPath, { method: method, headers: headers, body: body }).then(function (res) {
      return res.json();
    }).then(function (data) {

      /**
       * Request success
       * 
       */

      feedbackCb(data.evento.mensagem, 'success');
      (0, _cleanFields2['default'])(_id);

      /**
       * Filter ValleList update by id_tabela
       * 
       */

      if (updateValleList) {

        var columns = [];

        if (data.evento.id_tabela) {

          console.log('Update vallelist with id_tabela');

          columns = [{
            id: "id_tabela",
            filter: {
              tipo_1: "=",
              valor_1: data.evento.id_tabela
            }
          }];
        } else {

          console.log('Update vallelist');
        }

        updateValleList.getListFromAPI(customParams.id_usuario, token, customParams.identificador, customParams.cliente_id, customParams.empresa, customParams.estabelecimento, customParams.conexao, customParams.sistema, customParams.formulario, true, updateValleList.listData, updateValleList.setListData, null, 1, columns, null, null);
      }
    })['catch'](function (data) {

      /**
       * Request error
       * 
       */

      feedbackCb('Erro interno no servidor', 'error');
    });
  } else {

    /**
     * Form error
     * 
     */

    feedbackCb('Erro ao preencher o formulário', 'error');
  }
};

exports['default'] = apiCreate;