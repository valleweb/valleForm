
Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getFieldsParams = require('../fieldsControl/getFieldsParams');

var _getFieldsParams2 = _interopRequireDefault(_getFieldsParams);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

/**
 * TODO: Add JSDocs
 *
 */

var apiUpdate = function apiUpdate(baseApi, canonicalApi) {
  var customParams = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  var _id = arguments[3];
  var feedbackCb = arguments[4];
  var formCb = arguments[5];
  var token = arguments[6];
  var closeSpeedDial = arguments[7];
  var updateValleList = arguments[8];
  var tabErrorCount = arguments[9];
  var setLoading = arguments[10];


  /**
   * Get all form values
   *
   */

  var fieldsParams = (0, _getFieldsParams2['default'])(_id, tabErrorCount);

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

    var method = 'PUT';

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
     * HTTP PUT
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
      formCb();

      /**
       * Update ValleList
       *
       */

      if (updateValleList) {

        var columns = [];

        if (updateValleList.listData.list.columns) {

          console.log('Update vallelist with filters:');
          console.log(updateValleList.listData.list.columns);

          columns = updateValleList.listData.list.columns;
        } else {

          console.log('Update vallelist without filters');
        }

        updateValleList.getListFromAPI(customParams.id_usuario, token, customParams.identificador, customParams.cliente_id, customParams.empresa, customParams.estabelecimento, customParams.conexao, customParams.sistema, customParams.formulario, true, updateValleList.listData, updateValleList.setListData, null, 1, columns, fieldsParams, null);
      }
    })['catch'](function (err) {

      /**
       * Request error
       *
       */

      setLoading(false);

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

exports['default'] = apiUpdate;