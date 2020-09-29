Object.defineProperty(exports, "__esModule", {
		value: true
});

var _cleanFields = require('../fieldsControl/cleanFields');

var _cleanFields2 = _interopRequireDefault(_cleanFields);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

/**
 * TODO: Add JSDocs
 * 
 */

var apiDelete = function apiDelete(baseApi, canonicalApi) {
		var customParams = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
		var _id = arguments[3];
		var feedbackCb = arguments[4];
		var newCB = arguments[5];
		var token = arguments[6];
		var closeSpeedDial = arguments[7];
		var updateValleList = arguments[8];


		/**
   * API url
   * 
   */

		var apiPath = '' + String(baseApi) + String(canonicalApi);

		/**
   * Request configs
   * 
   */

		var method = 'DELETE';

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
						action: 'delete',
						dados: null
				})
		});

		/**
   * HTTP DELETE
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
				newCB();

				/**
    * Update ValleList
    * 
    */

				if (updateValleList) {

						updateValleList.getListFromAPI(customParams.id_usuario, token, customParams.identificador, customParams.cliente_id, customParams.empresa, customParams.estabelecimento, customParams.conexao, customParams.sistema, customParams.formulario, true, updateValleList.listData, updateValleList.setListData, null, 1, [], null, null);
				}
		})['catch'](function (err) {

				/**
     * Request error
     * 
     */

				console.log(err);

				feedbackCb('Erro interno no servidor', 'error');
		});
};

exports['default'] = apiDelete;