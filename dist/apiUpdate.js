Object.defineProperty(exports, "__esModule", {
	value: true
});

var _axios = require('axios');

var _axios2 = _interopRequireDefault(_axios);

var _getFieldsParams = require('./getFieldsParams');

var _getFieldsParams2 = _interopRequireDefault(_getFieldsParams);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

exports['default'] = function (baseApi, canonicalApi) {
	var customParams = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
	var _id = arguments[3];
	var feedbackCb = arguments[4];
	var formCb = arguments[5];


	var fieldsParams = (0, _getFieldsParams2['default'])();

	if (fieldsParams) {

		var apiPath = '' + String(baseApi) + String(canonicalApi) + '/' + String(_id);
		var params = Object.assign(customParams, (0, _getFieldsParams2['default'])());

		_axios2['default'].put(apiPath, params).then(function (res) {
			feedbackCb('Dados atualizados com sucesso', 'success');
			formCb();
		})['catch'](function (err) {
			return feedbackCb('Erro interno no servidor', 'error');
		});
	} else {

		feedbackCb('Erro ao preencher o formulário', 'error');
	}
};